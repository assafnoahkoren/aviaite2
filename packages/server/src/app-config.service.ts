import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(public readonly configService: ConfigService) {}
  // Add app-specific config getters here as needed

  get ASK_YOUR_PDF_API_KEY(): string {
    return this.configService.getOrThrow('ASK_YOUR_PDF_API_KEY');
  }

  get ANTHROPIC_API_KEY(): string {
    return this.configService.getOrThrow('ANTHROPIC_API_KEY');
  }
} 