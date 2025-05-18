import { Injectable } from '@nestjs/common';
import { ChatDto } from './chat.controller';

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

@Injectable()
export class ChatService {
  chat(dto: ChatDto): { answer: string } {
    // For now, return a mocked answer
    const randomNumber = Math.floor(Math.random() * 100);
    return { answer: `This is a mocked answer. Random number: ${randomNumber}` };
  }
} 