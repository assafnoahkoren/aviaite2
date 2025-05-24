import Anthropic from '@anthropic-ai/sdk';
import { Injectable } from '@nestjs/common';
import { Message } from './chat.service'; // Assuming Message type is exported from chat.service

export const CLASSIFICATION_TYPES = ['rag', 'general'] as const;
export type ClassificationType = typeof CLASSIFICATION_TYPES[number];

@Injectable()
export class LlmService {
  private anthropic: Anthropic;

  constructor() {
    this.anthropic = new Anthropic({
      // defaults to process.env["ANTHROPIC_API_KEY"]
      apiKey: process.env.ANTHROPIC_API_KEY, // Ensure your API key is in .env
    });
  }

  async classifyUserRequest(userRequest: string): Promise<ClassificationType> {
    const msg = await this.anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 10,
      temperature: 0,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `You are an AI tasked with determining whether a given user request should be handled by a RAG (Retrieval-Augmented Generation) agent or a general AI agent. Your job is to analyze the request and make a decision based on specific criteria.

				Here is the user request:

				${userRequest}

				Use these criteria to make your decision:

				- Choose "rag" if the request likely requires retrieval of specific information from a knowledge base. Our knowledge base is aviation related so if the user request is about aviation but its not asking for a calculation, choose "rag".
				- Choose "general" if the request is a general question, a math problem, or a task that a general-purpose AI can handle without needing to retrieve specific stored information.

				Output your decision as a single word, either "rag" or "general". Don\'t add any other text, ONLY ONE WORD.`,
            },
          ],
        },
      ],
    });

    const rawDecision = msg.content[0].type === 'text' ? msg.content[0].text.trim().toLowerCase() : CLASSIFICATION_TYPES[1];
    
    if (CLASSIFICATION_TYPES.includes(rawDecision as ClassificationType)) {
      return rawDecision as ClassificationType;
    }

    console.warn('Unexpected response from Anthropic API for classification:', msg.content);
    return CLASSIFICATION_TYPES[1]; // Default to 'general'
  }

  async generalChat(userMessage: string, previousMessages: Message[] = []): Promise<string> {
    const messages = previousMessages.slice(-10).map(m => ({
      role: m.type === 'user' ? 'user' : 'assistant', // Map 'bot' to 'assistant'
      content: m.value,
    }));

    messages.push({ role: 'user', content: userMessage });

    try {
      const msg = await this.anthropic.messages.create({
        model: 'claude-sonnet-4-20250514', // Using a more capable model for general chat
        max_tokens: 1024, // Allow for longer responses
        temperature: 0.7, // Allow for some creativity
        messages: messages as any, // Cast to any to satisfy Anthropic's type, ensure content is string
      });

      if (msg.content && msg.content.length > 0 && msg.content[0].type === 'text') {
        return msg.content[0].text;
      }
      return 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('Error in generalChat with Anthropic API:', error);
      return 'Sorry, an error occurred while processing your request.';
    }
  }
}