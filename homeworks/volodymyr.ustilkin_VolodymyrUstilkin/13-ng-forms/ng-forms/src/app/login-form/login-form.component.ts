import {AfterViewInit, Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

const EMAIL = 'email';
const PASSWORD = 'password';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements AfterViewInit {
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', this.emailValidate),
    password: new FormControl('', Validators.required),
    remember: new FormControl(''),
  });

  emailValidate(control: AbstractControl): ValidationErrors | null {
    const emailRegExp = /^(?![.0-9])([a-z0-9_.\-]*)(?<![.])@(?![.])([a-z0-9_.\-]+)\.([a-z0-9_.\-]+)(?<![.])$/i;
    const errors = [];
    if (!emailRegExp.test(control.value)) {
      errors.push('Incorrect email')
    }

    return errors.length === 0 ? null : errors;
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    const email = localStorage.getItem(EMAIL);
    const pass = localStorage.getItem(PASSWORD);

    this.formLogin.setValue({
      email: email ? atob(email) : '',
      password: pass ? atob(pass) : '',
      remember: (email || pass) ? 'checked' : ''
    });
  }

  onSubmit() {
    if (!this.formLogin.valid) {
      this.handleErrors();
      return;
    }

    if (this.formLogin.value.remember) {
      this.saveForm();
    } else {
      localStorage.clear();
    }

    alert(`EMAIL: ${this.formLogin.value.email}\nPASSWORD: ${this.formLogin.value.password}`);
  }

  private handleErrors() {
    const controls = this.formLogin.controls;

    let errors = 'Errors:';
    if (controls.email.errors) {
      errors += '\nIncorrect email';
    }

    if (controls.password.errors) {
      errors += '\nIncorrect password';
    }

    alert(errors);
  }

  private saveForm() {
    localStorage.setItem(EMAIL, btoa(this.formLogin.value.email));
    localStorage.setItem(PASSWORD, btoa(this.formLogin.value.password));
  }
}
