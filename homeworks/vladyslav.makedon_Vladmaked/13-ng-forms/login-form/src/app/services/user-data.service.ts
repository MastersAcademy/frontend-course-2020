import {Injectable} from '@angular/core';

import {UserData} from '../models';

@Injectable()
export class UserDataService {

  saveUserData(userData: UserData): void {
    if (userData.isCheckboxRememberMe) {
      localStorage.setItem('userData', btoa(JSON.stringify(userData)));
    } else {
      localStorage.clear();
    }
  }

  getUserData(): UserData {
    if (!localStorage.getItem('userData')) {
      return {
        email: '',
        password: '',
        isCheckboxRememberMe: false
      };
    }
    return JSON.parse((atob(localStorage.getItem('userData') || '')));
  }
}
