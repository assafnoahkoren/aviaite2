// API client for chat

import { fetchClient } from ".";

export type Message = {
  type: 'user' | 'bot';
  value: string;
  createdOn: Date;
};

export type Profile = {
  profileType: 'elal7787' | 'shirgal';
};

export type Settings = {
  language: 'he' | 'en';
  answerLength: 'short' | 'long';
  temperature: number;
};

export type ChatDto = {
  previousMessages: Message[];
  profile: Profile;
  settings: Settings;
  userMessage: string;
};

export type ChatResponse = {
  answer: string;
};

export const chatApi = {
  async chat(dto: ChatDto): Promise<ChatResponse> {
    const response = await fetchClient('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch chat response');
    }
    return response.json();
  },
}; 