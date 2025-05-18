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

  get exampleQuestions() {
    if (this.profileType === 'elal7787') {
      return [
        "What are the hours for the westbound tracks?",
        "What are the navigation performance requirements for the NAT?",
        "Is datalink a requirement for flying the NAT?",
        "What is the Gander transition area?",
        "When should I send the RCL message?"
      ];
    }

    if (this.profileType === 'shirgal') {
      return [
        "What is the Gander transition area?",
        "When should I send the RCL message?",
      ];
    }

    return [];

  }
}

export const profileStore = new ProfileStore();
export default ProfileStore; 