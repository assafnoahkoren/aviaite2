import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class SettingsStore {
  language: 'he' | 'en' = 'en';
  answerLength: 'short' | 'long' = 'long';
  temperature: number = 0.5;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'settings',
      properties: ['language', 'answerLength', 'temperature'],
      storage: localStorage,
    });
  }

  setLanguage(lang: 'he' | 'en') {
    this.language = lang;
  }

  setAnswerLength(length: 'short' | 'long') {
    this.answerLength = length;
  }

  setTemperature(temp: number) {
    this.temperature = temp;
  }
}

export const settingsStore = new SettingsStore();
export default SettingsStore; 