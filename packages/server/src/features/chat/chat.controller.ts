import { Controller, Body, Post } from '@nestjs/common';
import { ChatService, Message as ServiceMessage, Profile as ServiceProfile, Settings as ServiceSettings } from './chat.service';
import { IsArray, ValidateNested, IsObject, IsString, IsIn, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class ChatDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageDto)
  previousMessages: ServiceMessage[];

  @IsObject()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile: ServiceProfile;

  @IsObject()
  @ValidateNested()
  @Type(() => SettingsDto)
  settings: ServiceSettings;

  @IsString()
  userMessage: string;
}

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  chat(@Body() body: ChatDto) {
    return this.chatService.chat(body);
  }
}

// Allowed value arrays
export const MESSAGE_TYPES = ['user', 'bot'] as const;
export const PROFILE_TYPES = ['elal7787', 'shirgal'] as const;
export const LANGUAGES = ['he', 'en'] as const;
export const ANSWER_LENGTHS = ['short', 'long'] as const;

// Type definitions from arrays
export type MessageType = (typeof MESSAGE_TYPES)[number];
export type ProfileType = (typeof PROFILE_TYPES)[number];
export type Language = (typeof LANGUAGES)[number];
export type AnswerLength = (typeof ANSWER_LENGTHS)[number];

export class MessageDto {
  @IsIn(MESSAGE_TYPES)
  type: MessageType;

  @IsString()
  value: string;

  @Type(() => Date)
  createdOn: Date;
}

export class ProfileDto {
  @IsIn(PROFILE_TYPES)
  profileType: ProfileType;
}

export class SettingsDto {
  @IsIn(LANGUAGES)
  language: Language;

  @IsIn(ANSWER_LENGTHS)
  answerLength: AnswerLength;

  @IsNumber()
  temperature: number;
} 