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

export type DocuChatSourceChunk = {
  content: string;
  fileName: string;
  groupId: string;
  groupName: string;
  similarity: number;
  metaData: Record<string, any>;
  completedAt: string;
  startedAt: string;
  tokenUsage: number;
};

export type DocuChatSourceResult = {
  chunks: DocuChatSourceChunk[];
};

export type DocuChatSources = {
  results: DocuChatSourceResult[];
};

export type ChatResponse = {
  answer: string;
  sources?: DocuChatSources;
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

  async query(profileType: Profile['profileType'], question: string): Promise<ChatResponse> {
    const response = await fetchClient('/api/chat/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileType, question }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch DocuChat response');
    }
    return response.json();
  },
}; 