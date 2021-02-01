import { Injectable } from '@angular/core';

const AUTH = 'auth';

export interface IAuthService {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  saveAuth(email: string, password: string) {
    const auth: IAuthService = {
      email : email,
      password: password
    }
    localStorage.setItem(AUTH, btoa(JSON.stringify(auth)));
  }

  getAuth(): IAuthService {
    const authEnc = localStorage.getItem(AUTH);
    if (authEnc) {
      return JSON.parse(atob(authEnc));
    }

    return {email : '', password: ''};
  }

  clearAuth() {
    localStorage.clear();
  }
}
