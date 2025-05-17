import { makeAutoObservable } from 'mobx';

export interface Message {
  type: 'user' | 'bot';
  value: string;
  createdOn: Date;
}

class ChatStore {
  messages: Message[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(message: Omit<Message, 'createdOn'>) {
    this.messages.push({ ...message, createdOn: new Date() });
  }
}

export const chatStore = new ChatStore();
export default ChatStore; 