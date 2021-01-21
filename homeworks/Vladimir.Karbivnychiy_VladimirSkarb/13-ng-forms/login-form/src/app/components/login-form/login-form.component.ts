import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import {User} from "../../models/user.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  ngOnInit() {
    this.checkStorage();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.minLength(8)
    ]),
    checkbox: new FormControl(),
  });


  onSubmit(): void {
    const info: string = `Email - ${this.loginForm.value.email}, Password - ${this.loginForm.value.password}`
    if (this.loginForm.value.checkbox) {
      const encode: string = btoa(JSON.stringify(this.loginForm.value));
      localStorage.setItem('user', encode);
    } else {
      localStorage.removeItem('user');
    }
    this.loginForm.reset();
    alert(info)
  }

  checkStorage(): void {
    if (localStorage.getItem('user')) {
      const coding: string = atob(<string>localStorage.getItem('user'));
      const user: User = JSON.parse(coding);
      this.loginForm.setValue({
        email: user.email,
        password: user.password,
        checkbox: user.checkbox,
      });
    }
  }
}
