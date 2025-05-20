import { makeAutoObservable } from 'mobx';
import { chatApi } from '../../api/chatApi';
import { profileStore } from '../profile/ProfileStore';
import type { DocuChatSourceChunk } from '../../api/chatApi';

export interface Message {
  type: 'user' | 'bot';
  value: string;
  createdOn: Date;
  sources?: DocuChatSourceChunk[];
}

class ChatStore {
  messages: Message[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async addMessage(message: Omit<Message, 'createdOn' | 'sources'>) {
    this.isLoading = true;
    const userMsg = { ...message, createdOn: new Date() };
    this.messages.push(userMsg);
    try {
      const response = await chatApi.query(profileStore.profileType, message.value);
      let sources: DocuChatSourceChunk[] | undefined = undefined;
      if (response.sources) {
        sources = response.sources.results.flatMap(r => r.chunks);
      }
      this.messages.push({ type: 'bot', value: response.answer, createdOn: new Date(), sources });
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