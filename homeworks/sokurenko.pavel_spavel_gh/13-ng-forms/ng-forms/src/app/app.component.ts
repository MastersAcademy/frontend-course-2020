import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    remember: new FormControl(''),
  });


  ngOnInit(): void {
    if ((localStorage.getItem('email') !== null) && (localStorage.getItem('password') !== null)) {
      this.authForm.setValue({
        email: atob(localStorage.getItem('email')),
        password: atob(localStorage.getItem('password')),
        remember: true
      });
    }
  }


  public onSubmit(): void {
    this.printFormFieldsAlert();
    this.updateLoacalStorage(this.authForm.value.remember);
  }

  public printFormFieldsAlert(): void {
    alert(
      '\nFORM FIELDS\n\n' +
      'email:  ' + this.authForm.value.email +
      '\npassword:  ' + this.authForm.value.password +
      '\nremember:  ' + this.authForm.value.remember
      );
    localStorage.setItem('email', btoa(this.authForm.value.email.toString()));
    localStorage.setItem('password', btoa(this.authForm.value.password.toString()));
  }

  public updateLoacalStorage(remember: boolean): void {
    if (remember === true) {
      localStorage.setItem('email', btoa(this.authForm.value.email.toString()));
      localStorage.setItem('password', btoa(this.authForm.value.password.toString()));
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  }
}
