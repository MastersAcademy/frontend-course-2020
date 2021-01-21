import { Injectable } from '@angular/core';
import { Credentials } from '../interfaces';

@Injectable()
export class EncodeDataFormService {
  dataFormFilds: Credentials = {
    email: '',
    password: ''
  };

  set(data: Credentials): void {
    this.dataFormFilds.email = window.btoa(data.email);
    this.dataFormFilds.password = window.btoa(data.password);

    localStorage.setItem('dataFields', JSON.stringify(this.dataFormFilds));
  }

  get(): Credentials {
    this.dataFormFilds = JSON.parse((localStorage.getItem('dataFields') || ''));

    const decodedDataEmail: string = window.atob(this.dataFormFilds.email);
    const decodedDataPassword: string = window.atob(this.dataFormFilds.password);

    this.dataFormFilds.email = decodedDataEmail;
    this.dataFormFilds.password = decodedDataPassword;

    return this.dataFormFilds;
  }

}
