import { Injectable } from '@angular/core';

export interface Auth {
    email: string,
    password: string
}

@Injectable()
export class AuthService {

    public setOnLocalStorage(email: string, password: string): void {
        const auth = { 'email': email, 'password': password };
        localStorage.setItem('auth', btoa(JSON.stringify(auth)));
    }

    public getFromLocalStorage(): Auth {
        const value = localStorage.getItem('auth');
        let result = null;
        if (value) {
            result = JSON.parse(atob(value))
        }
        return result;
    }
}
