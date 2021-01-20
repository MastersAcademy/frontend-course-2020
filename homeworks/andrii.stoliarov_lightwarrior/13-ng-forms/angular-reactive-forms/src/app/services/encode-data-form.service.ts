import { Injectable } from '@angular/core';
import { Form } from '../interfaces/form.interface';

@Injectable()
export class EncodeDataFormService {
  private encodedDataEmail: string = '';
  private encodedDataPassword: string = '';

  setDataLocalStorage(data: Form): void {
    this.encodedDataEmail = window.btoa(data.email);
    this.encodedDataPassword = window.btoa(data.password);

    localStorage.setItem('email', this.encodedDataEmail);
    localStorage.setItem('password', this.encodedDataPassword);
  }

  getDecodedDataEmail(): string {
    const getLocalStorageEmail: string = localStorage.getItem('email') || '';

    return window.atob(getLocalStorageEmail);
  }

  getDecodedDataPassword(): string {
    const getLocalStoragePassword: string = localStorage.getItem('password') || '';

    return window.atob(getLocalStoragePassword);
  }

}
