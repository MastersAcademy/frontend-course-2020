import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  saveToLocalStorage(): void {
    if (localStorage.getItem('data')) {
      const dataInputs: string = atob(<string>localStorage.getItem('data'));
      const data = JSON.parse(dataInputs);
      this.loginForm.setValue({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      });
    }
  }

  ngOnInit(): void {
    this.saveToLocalStorage();
  }

  public readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(5)]),
    rememberMe: new FormControl()
  })

  public get email(): string {
    return this.loginForm.controls.email.value;
  }

  public get password(): string {
    return this.loginForm.controls.password.value;
  }

  public showData() {
    if (this.loginForm.value.rememberMe) {
      const dataInputs: string = btoa(JSON.stringify(this.loginForm.value));
      localStorage.setItem('data', dataInputs)
    }

    alert(`Email: ${this.email}
           Password ${this.password}`)
  }
}
