import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { LlmService } from './llm.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, LlmService],
  exports: [ChatService, LlmService],
})
export class ChatModule {} 