import { Injectable, Inject } from '@nestjs/common';
import { ChatDto } from './chat.controller';
import fetch from 'node-fetch';

export type Message = {
	type: 'user' | 'bot' | 'system';
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

const userTypeToKnowledgeBaseId: Record<Profile['profileType'], string> = {
	shirgal: '6a4c7da7-3a71-4ade-94d0-422d3ee0fc1f',
	elal7787: 'a83cb63a-9c73-4881-9d1f-4b30619e2c2e',
};

const languageToASKYourPDFLanguage: Record<Settings['language'], string> = {
	he: 'HEBREW',
	en: 'ENGLISH',
};

const answerLengthToASKYourPDFAnswerLength: Record<Settings['answerLength'], string> = {
	short: 'SHORT',
	long: 'LONG',
};

@Injectable()
export class ChatService {
	constructor(
		
	) { }

	async chat(dto: ChatDto): Promise<{ answer: string }> {
		// For demonstration, knowledge_base_id is hardcoded. Replace with your logic.
		const knowledgeBaseId = userTypeToKnowledgeBaseId[dto.profile.profileType];
		const apiKey = process.env.ASK_YOUR_PDF_API_KEY || '';
		const url = `https://api.askyourpdf.com/v1/api/knowledge/${knowledgeBaseId}/chat`;

		// Map messages to AskYourPDF format
		// Only include the last 10 previous messages
		const messages = dto.previousMessages.slice(-10).map(m => ({
			sender: m.type,
			message: m.value,
		}));

		const params = new URLSearchParams({
			temperature: dto.settings.temperature.toString(),
			language: languageToASKYourPDFLanguage[dto.settings.language],
			length: answerLengthToASKYourPDFAnswerLength[dto.settings.answerLength],
			cite_source: 'true',
		});

		const response = await fetch(`${url}?${params.toString()}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
			body: JSON.stringify({ messages }),
		});

		if (!response.ok) {
			throw new Error('Failed to fetch from AskYourPDF API');
		}
		const data = await response.json() as {
			question: { sender: string; message: string; type: string };
			answer: { sender: string; message: string; type: string };
			created: string;
		};
		return { answer: data.answer?.message || 'No answer from AskYourPDF.' };
	}
} 