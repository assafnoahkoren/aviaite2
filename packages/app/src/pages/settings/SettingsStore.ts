import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class SettingsStore {
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'settings',
      properties: [],
      storage: localStorage,
    });
  }
}

export const settingsStore = new SettingsStore();
export default SettingsStore; 