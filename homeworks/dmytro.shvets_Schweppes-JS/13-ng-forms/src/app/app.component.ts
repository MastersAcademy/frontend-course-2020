import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ValidatorService } from './services/validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {

  private isEmailInputTouched: boolean = false;
  private isEmailInputValid: boolean = false;
  public isEmailIncorrect: boolean = false;
  public emailLabel: string = 'Email Address';

  private isPasswordInputTouched: boolean = false;
  private isPasswordInputValid: boolean = false;
  public isPasswordIncorrect: boolean = false;
  public passwordLabel: string = 'Password';
  public passwordType: string = 'password';


  public isRemebered: boolean = false;

  public loginInfoControl: FormGroup;

  private subscription: Subscription = new Subscription();

  constructor(private validatorService: ValidatorService) { }

  ngOnInit() {
    this.loginInfoControl = new FormGroup({
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator]),
      password: new FormControl('', [Validators.required, this.validatorService.passwordValidator])
    });

    this.subscription.add(this.loginInfoControl.controls.email.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.isEmailInputValid = true;
        this.isEmailIncorrect = false;
        this.emailLabel = "Email Address";
      } else {
        console.log(123)
        this.isEmailInputValid = false;
        this.isEmailIncorrect = true;
        this.emailLabel = "Plese, input corect part followed before and after '@'";
      }
    }));

    this.subscription.add(this.loginInfoControl.controls.password.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.isPasswordInputValid = true;
        this.isPasswordIncorrect = false;
        this.passwordLabel = "Password";
      } else {
        this.isPasswordInputValid = false;
        this.isPasswordIncorrect = true;
        this.passwordLabel = "Plese, include minimum eight characters, at least one letter and one number";
      }
    }));
  }

  public onEmailBlur(): void {
    this.isEmailInputTouched = true;
    this.isEmailIncorrect = (this.isEmailInputTouched && !this.isEmailInputValid);
    if (this.isEmailIncorrect) {
      this.emailLabel = "Plese, input corect part followed before and after '@'";
    }
    else {
      this.emailLabel = "Email Address";
    }
  }

  public onPasswordBlur(): void {
    this.isPasswordInputTouched = true;
    this.isPasswordIncorrect = (this.isPasswordInputTouched && !this.isPasswordInputValid);
    if (this.isPasswordIncorrect) {
      this.passwordLabel = "Plese, include minimum eight characters, at least one letter and one number";
    }
    else {
      this.passwordLabel = "Password";
    }
  }

  ngAfterContentInit() {
    if (localStorage.getItem('log')) {
      const userInfo = JSON.parse(atob(localStorage.getItem('log')));
      this.loginInfoControl.controls.email.setValue(userInfo.email);
      this.loginInfoControl.controls.password.setValue(userInfo.password);
      this.isRemebered = true;
    }
  }

  public showingPassword(visibilityInput: HTMLInputElement): void {
    visibilityInput.checked ? this.passwordType = 'text' : this.passwordType = 'password';
  }

  public onSubmit(remembranceTarget: HTMLInputElement): void {

    if (this.loginInfoControl.controls.password.valid && this.loginInfoControl.controls.email.valid) {
      const userInfo = {
        email: this.loginInfoControl.controls.email.value,
        password: this.loginInfoControl.controls.password.value
      }

      if (remembranceTarget.checked) {
        localStorage.setItem('log', btoa(JSON.stringify(userInfo)));
      } else localStorage.setItem('log', '');

      alert(`email: ${userInfo.email}\npassword: ${userInfo.password}`);
      document.location.reload();
    }
    else {
      alert('Please, enter all fields correctly');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
