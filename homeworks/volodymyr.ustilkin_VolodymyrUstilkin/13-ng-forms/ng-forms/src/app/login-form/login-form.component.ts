import {AfterContentInit, Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService, IAuthService} from "../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements AfterContentInit {
  formLogin: FormGroup = this.formBuilder.group({
    email: new FormControl('', this.emailValidate),
    password: new FormControl('', Validators.required),
    remember: new FormControl(''),
  });

  emailValidateError: string = '';
  passwordValidateError:string = '';

  emailValidate(control: AbstractControl): ValidationErrors | null {
    const emailRegExp = /^(?![.0-9])([a-z0-9_.\-]*)(?<![.])@(?![.])([a-z0-9_.\-]+)\.([a-z0-9_.\-]+)(?<![.])$/i;
    const errors = [];
    if (!emailRegExp.test(control.value)) {
      errors.push('Incorrect email')
    }

    return errors.length === 0 ? null : errors;
  }

  constructor(private formBuilder: FormBuilder, private authService:AuthService) {}

  ngAfterContentInit(): void {
    const auth : IAuthService = this.authService.getAuth();

    this.formLogin.setValue({
      email: auth.email,
      password: auth.password,
      remember: (auth.email || auth.password) ? 'checked' : ''
    });
  }

  onSubmit() {
    if (this.formLogin.invalid) {
      this.handleErrors();
      return;
    }

    if (this.formLogin.value.remember) {
      this.authService.saveAuth(this.formLogin.value.email, this.formLogin.value.password);
    } else {
      this.authService.clearAuth();
    }

    alert(`EMAIL: ${this.formLogin.value.email}\nPASSWORD: ${this.formLogin.value.password}`);
  }

  private handleErrors() {
    const controls = this.formLogin.controls;

    if (controls.email.errors) {
      this.emailValidateError = 'Incorrect email';
    }

    if (controls.password.errors) {
      this.passwordValidateError = 'Incorrect password';
    }
  }
}
