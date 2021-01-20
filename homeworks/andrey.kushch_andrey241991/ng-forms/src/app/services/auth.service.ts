import { Injectable } from '@angular/core';
import { Auth } from '../models/Auth';


@Injectable()
export class AuthService {

    public setData(email: string, password: string): void {
        const auth = { 'email': email, 'password': password };
        localStorage.setItem('auth', btoa(JSON.stringify(auth)));
    }

    public getData(): Auth {
        const value = localStorage.getItem('auth');
        if (value) {
            return JSON.parse(atob(value))
        }
        return {
            email: '',
            password: ''
        }
    }
}
