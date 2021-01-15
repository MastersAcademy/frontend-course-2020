import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor() { }

  emailValidator(control: AbstractControl): { [key: string]: any } | null {
    const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
    if (isValid) return null;
    return { 'incorrect': true };
  }

  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(control.value);
    if (isValid) return null;
    return { 'incorrect': true };
  }
}
