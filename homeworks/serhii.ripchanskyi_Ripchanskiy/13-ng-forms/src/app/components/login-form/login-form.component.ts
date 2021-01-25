import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { User } from "../../models";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  ngOnInit(): void {
    this.getUser();
  }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    rememberMe: new FormControl(),
  });

  onSubmit(): void {
    this.form.value.rememberMe ? this.rememberUser() : this.forgetUser();
    this.showFormData();
  }

  showFormData = (): void => alert(`Email: ${this.form.value.email} \nPassword: ${this.form.value.password}`);

  rememberUser = (): void => localStorage.setItem('user', this.encode(JSON.stringify(this.form.value)));

  forgetUser = (): void => localStorage.removeItem('user');

  getUser(): void {
    const existingUser = localStorage.getItem('user');
    if (existingUser) {
      const user = JSON.parse(this.decode(existingUser));
      this.setForm(user)
    }
  }

  setForm(user: User): void {
    this.form.setValue({
      email: user.email,
      password: user.password,
      rememberMe: user.rememberMe,
    });
  }

  encode = (value: string): string => btoa(value);

  decode = (value: string): string => atob(value);
}
