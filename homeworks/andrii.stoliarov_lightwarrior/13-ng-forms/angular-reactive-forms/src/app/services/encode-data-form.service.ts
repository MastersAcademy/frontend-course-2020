import { Injectable } from '@angular/core';

@Injectable()
export class EncodeDataFormService {
  private tempForm: any;

  private encodedDataEmail: string = '';
  private encodedDataPassword: string = '';

  constructor() {}

  setDataLocalStorage() {
    this.tempForm = form;
    const formData = {...this.tempForm.value};

    this.encodedDataEmail = window.btoa(formData.email);
    this.encodedDataPassword = window.btoa(formData.password);

    localStorage.setItem('email', this.encodedDataEmail);
    localStorage.setItem('password', this.encodedDataPassword);
  }
}
