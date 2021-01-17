import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false),
  });

  public email: string;
  public password: string;
  public remember: boolean;

  public updateState() {
    this.email = this.loginForm.controls.email.value;
    this.password = this.loginForm.controls.password.value;
    this.remember = this.loginForm.controls.remember.value;
  }

  public showMessage() {
    const resultMessage: string = `
    Email: ${this.email}
    Password: ${this.password}`;
    alert(resultMessage);
  }

  public saveLoginData() {
    const email = window.btoa(this.email);
    const password = window.btoa(this.password);

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  public deleteLoginData() {
    localStorage.clear();
  }

  public checkLocalStorage(): boolean {
    return localStorage.getItem('email') !== null &&
           localStorage.getItem('password') !== null;
  }

  public updateFormLS() {
    if (this.checkLocalStorage()) {
      const email = window.atob(localStorage.getItem('email'));
      const password = window.atob(localStorage.getItem('password'));

      this.loginForm.controls.email.setValue(email);
      this.loginForm.controls.password.setValue(password);
    }
  }

  public submit(event: Event) {
    event.preventDefault();
    if (this.loginForm.invalid) return false;

    this.updateState();

    if (this.remember) { this.saveLoginData() }
    else { this.deleteLoginData() }

    this.showMessage();
    this.loginForm.reset();
  }

  ngOnInit() {
    this.updateFormLS();
  }
}
