import { makeAutoObservable } from 'mobx';

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const profileStore = new ProfileStore();
export default ProfileStore; 