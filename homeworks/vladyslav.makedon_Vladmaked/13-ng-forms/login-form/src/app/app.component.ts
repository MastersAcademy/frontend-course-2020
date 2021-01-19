import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.getFormState();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      checkbox: new FormControl('')
    });
  }

  getFormState(): void {
    let email = '';
    let password = '';
    const checkbox = '';
    if (localStorage.getItem('email')) {
      email = atob(localStorage.getItem('email') || '');
    }
    if (localStorage.getItem('password')) {
      password = atob(localStorage.getItem('password') || '');
    }
    this.form.setValue({
      email,
      password,
      checkbox
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    if (this.form.value.checkbox === true) {
      localStorage.setItem('email', btoa(this.form.value.email));
      localStorage.setItem('password', btoa(this.form.value.password));
    } else {
      localStorage.clear();
    }

    alert(`Email: ${this.form.value.email}\nPassword: ${this.form.value.password}`);

    this.form.reset();
  }
}
