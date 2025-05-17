import { makeAutoObservable } from 'mobx';

class SettingsStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const settingsStore = new SettingsStore();
export default SettingsStore; 