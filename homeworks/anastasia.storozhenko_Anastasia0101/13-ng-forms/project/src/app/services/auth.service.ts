import { Injectable } from '@angular/core';
import { UserAuth } from '../models/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localStorage!: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(): UserAuth {
    const userAuthData = this.localStorage.getItem('auth')!;
    return JSON.parse(atob(userAuthData));
  }

  set(value: UserAuth): void {
    this.localStorage.setItem('auth', btoa(JSON.stringify(value)));
  }
}
