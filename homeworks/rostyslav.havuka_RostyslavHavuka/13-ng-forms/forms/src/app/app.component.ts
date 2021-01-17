import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  form: FormGroup;
  formEmail: string = '';
  formPassword: string = '';
  codeEmail: string;
  codePassword: string;
  passwordError: string;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      checkboxRemember: false,
    });
  }

  ngOnInit() {
    this.codeEmail = localStorage.getItem("email");
    this.codePassword = localStorage.getItem("password");

    if (this.codeEmail && this.codePassword !== null) {
      this.codeEmail = atob(this.codeEmail);
      this.codePassword = atob(this.codePassword);
    } else {
      this.codeEmail = '';
      this.codePassword = '';
    }
    this.form.patchValue({
      email: this.codeEmail,
      password: this.codePassword
    })
  }

  submitForm() {
    if (this.form.get("checkboxRemember").value === true) {
      this.formEmail = this.form.get("email").value;
      this.formPassword = this.form.get("password").value;
      this.codeEmail = btoa(this.formEmail);
      this.codePassword = btoa(this.formPassword);
      localStorage.setItem("email", this.codeEmail);
      localStorage.setItem("password", this.codePassword);
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

  emailErrorMessage() {
    if (this.form.get("email").hasError('email')) {
      return 'Not a valid!'
    }
  }

  passwordErrorMessage() {
    if (this.form.get("password").hasError('minlength')) {
      return 'Min 6 lenght!';
    }
  }
}
