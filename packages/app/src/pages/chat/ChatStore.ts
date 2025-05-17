import { makeAutoObservable } from 'mobx';

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
    this.messages.push({ ...message, createdOn: new Date() });
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.messages.push({ type: 'bot', value: 'Hello, how can I help you today?', createdOn: new Date() });
    this.isLoading = false;
  }
}

export const chatStore = new ChatStore();
export default ChatStore; 