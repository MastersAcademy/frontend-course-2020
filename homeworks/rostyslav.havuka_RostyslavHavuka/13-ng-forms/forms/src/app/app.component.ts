import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      checkboxRemember: false,
    });
  }

  ngOnInit() {
    if (localStorage.length != 0) {
      this.form.patchValue({
        email: atob(localStorage.getItem("email")),
        password: atob(localStorage.getItem("password"))
      })
    }
  }
  
  submitForm() {
    if (this.form.get("checkboxRemember").value === true) {
      localStorage.setItem("email", btoa(this.form.get("email").value));
      localStorage.setItem("password", btoa(this.form.get("password").value));
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
}
