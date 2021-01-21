import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  formEmailValue: string = '';
  formPasswordValue: string = '';

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      checkboxRemember: false,
    });
  }

  ngOnInit() {
    this.formEmailValue = this.form.get("email").value;
    this.formPasswordValue = this.form.get("password").value;
    this.formEmailValue = localStorage.getItem("email");
    this.formPasswordValue = localStorage.getItem("password");
    if (this.formPasswordValue && this.formEmailValue !== null) {
      this.formEmailValue = atob(this.formEmailValue);
      this.formPasswordValue = atob(this.formPasswordValue);
    } else {
      this.formEmailValue = '';
      this.formPasswordValue = '';
    }
    this.form.patchValue({
      email: this.formEmailValue,
      password: this.formPasswordValue
    })
  }

  submitForm() {
    if (this.form.get("checkboxRemember").value === true) {
      localStorage.setItem("email", btoa(this.formEmailValue));
      localStorage.setItem("password", btoa(this.formPasswordValue));
    } else {
      localStorage.clear();
    }

    if (this.form.valid) {
      const userData: string = `Email: ${this.form.get("email").value} | Password: ${this.form.get("password").value}`;
      alert(userData);
    } else {
        alert('There is a problem with the form');
    }
  }

  formGroup() {
    return this.form;
  }
}
