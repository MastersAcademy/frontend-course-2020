import { OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from './services/validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {

  public passwordType: string = 'password';

  public isRemebered: boolean = false;

  public loginInfoControl: FormGroup;

  constructor(private validatorService: ValidatorService) { }

  ngOnInit() {
    this.loginInfoControl = new FormGroup({
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator]),
      password: new FormControl('', [Validators.required, this.validatorService.passwordValidator]),
    });
  }

  ngAfterContentInit() {
    if (localStorage.getItem('log')) {
      const userInfo = JSON.parse(localStorage.getItem('log'));
      this.loginInfoControl.controls.email.setValue(userInfo.email);
      this.loginInfoControl.controls.password.setValue(userInfo.password);
      this.isRemebered = true;
    }
  }

  showingPassword(visibilityInput: HTMLInputElement): void {
    visibilityInput.checked ? this.passwordType = 'text' : this.passwordType = 'password';
  }

  onSubmit(remembranceTarget: HTMLInputElement): void {

    if (this.loginInfoControl.controls.password.valid && this.loginInfoControl.controls.email.valid) {

      const userInfo = {
        email: this.loginInfoControl.controls.email.value,
        password: this.loginInfoControl.controls.password.value
      }

      if (remembranceTarget.checked) {
        localStorage.setItem('log', JSON.stringify(userInfo));
      } else localStorage.setItem('log', '');

      alert(`email: ${userInfo.email}\npassword: ${userInfo.password}`);
      this.loginInfoControl.controls.email.setValue('');
      this.loginInfoControl.controls.password.setValue('');
      this.loginInfoControl.controls.email.markAsUntouched();
      this.loginInfoControl.controls.password.markAsUntouched();
    }
    else {
      alert('Please, enter all fields correctly');
    }
  }
}
