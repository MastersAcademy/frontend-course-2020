import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-forms';
  private email: string = '';
  private password: string = '';
  private signInControl: FormGroup;
  private EMAIL_KEY: string = 'EMAIL_KEY';
  private PASSWORD_KEY: string = 'PASSWORD_KEY';

  ngOnInit() {
    this.getFromLocalStorage()
    this.signInControl = new FormGroup({
      loginControl: new FormControl(this.email, [Validators.required, Validators.email, Validators.minLength(10)]),
      passwordControl: new FormControl(this.password, [Validators.required, Validators.minLength(8)]),
      rememberControl: new FormControl(false)
    });
  }

  setOnLocalStorage(email: string, password: string): void {
    localStorage.setItem(this.EMAIL_KEY, btoa(email))
    localStorage.setItem(this.PASSWORD_KEY, btoa(password))
  }

  getFromLocalStorage(): void {
    this.email = atob(localStorage.getItem(this.EMAIL_KEY) || '');
    this.password = atob(localStorage.getItem(this.PASSWORD_KEY) || '');
  }

  onSubmit(): void {
    const email = this.signInControl.get('loginControl')?.value;
    const password = this.signInControl.get('passwordControl')?.value;
    const rememberControl = this.signInControl.get('rememberControl')?.value;
    alert(`Email is ${email}, Password is ${password}`)
    if (rememberControl) {
      this.setOnLocalStorage(email, password)
    }
  }
}
