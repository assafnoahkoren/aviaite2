import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class ProfileStore {
  profileType: 'elal7787' | 'shirgal' = 'elal7787';

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'profile',
      properties: ['profileType'],
      storage: localStorage,
    });
  }

  setProfileType(type: 'elal7787' | 'shirgal') {
    this.profileType = type;
  }
}

export const profileStore = new ProfileStore();
export default ProfileStore; 