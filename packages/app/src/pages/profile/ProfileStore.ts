import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'profile',
      properties: [],
      storage: localStorage,
    });
  }
}

export const profileStore = new ProfileStore();
export default ProfileStore; 