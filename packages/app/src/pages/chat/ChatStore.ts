import { makeAutoObservable } from 'mobx';
import { chatApi } from '../../api/chatApi';
import { profileStore } from '../profile/ProfileStore';
import { settingsStore } from '../settings/SettingsStore';

export interface Message {
  type: 'user' | 'bot';
  value: string;
  createdOn: Date;
}

class ChatStore {
  messages: Message[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async addMessage(message: Omit<Message, 'createdOn'>) {
    this.isLoading = true;
    const userMsg = { ...message, createdOn: new Date() };
    this.messages.push(userMsg);
    try {
      const dto = {
        previousMessages: this.messages,
        profile: { profileType: profileStore.profileType },
        settings: {
          language: settingsStore.language,
          answerLength: settingsStore.answerLength,
          temperature: settingsStore.temperature,
        },
        userMessage: message.value,
      };
      const response = await chatApi.chat(dto);
      this.messages.push({ type: 'bot', value: response.answer, createdOn: new Date() });
    } catch (e) {
      this.messages.push({ type: 'bot', value: 'Sorry, there was an error.', createdOn: new Date() });
    }
    this.isLoading = false;
  }

  newChat() {
    this.messages = [];
  }
}

export const chatStore = new ChatStore();
export default ChatStore; 