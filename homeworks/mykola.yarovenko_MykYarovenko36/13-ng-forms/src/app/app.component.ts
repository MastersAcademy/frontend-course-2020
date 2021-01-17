import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './models/login-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  nameControl!: FormControl;
  passControl!: FormControl;
  rememberControl!: FormControl;
  formGroupData!: FormGroup;
  formIsDisabled: boolean = true;
  formIsRememberd!: boolean;
  formFields!: LoginForm;
  login = '';
  password = '';

  ngOnInit() {
    let item = localStorage.getItem('loginParams');
    item === null?  (this.setLoginForm(), this.formIsRememberd = true) : (this.getLoginFormData(item), this.setLoginForm(), this.formIsRememberd = true, this.formIsDisabled = false);
  }

  setLoginForm() {
      this.formGroupData = new FormGroup({
          login: new FormControl(this.login, [
            Validators.email,
            Validators.required]),
          password: new FormControl(this.password, [
            Validators.required,
            Validators.minLength(5),
          ]),
      });
      this.formGroupData.statusChanges.subscribe(
          (status): void => {
              status === 'INVALID'? this.formIsDisabled = true :
              this.formIsDisabled = false;
          });
      this.formGroupData.valueChanges.subscribe(
          (value) => {
              this.formFields = value;
          }
      );
  }

  public setLoginFormData(): void {
      const formData = {
        item: btoa(this.formFields.login),
        key: btoa(this.formFields.password)
      }
      const message = `Your login is saved. login-name: ${this.formFields.login}, password: ${this.formFields.password}`;
      this.formIsRememberd? (localStorage.setItem('loginParams', JSON.stringify(formData)),
      alert(message)) : alert(message);
  }

  private getLoginFormData(item: string): void {
      const savedForm = JSON.parse(item);
      this.login = atob(savedForm.item);
      this.password = atob(savedForm.key);
  }
}

