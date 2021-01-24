import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Data } from './models';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getDataFromLocalStorage();
  }

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    checkbox: new FormControl(''),
  });

  setToLocalStorage(): void {
    const codedFormData: string = btoa(JSON.stringify(this.profileForm.value));
    localStorage.setItem('data', codedFormData);
  }

  onSubmit(): void {
    alert(`Email: ${this.profileForm.value.email} Password: ${this.profileForm.value.password}`);
    if (this.profileForm.value.checkbox) {
      this.setToLocalStorage();
    } else {
      localStorage.removeItem('data');
    }
    this.profileForm.reset();
  }

  setValueToProfileForm(data: Data): void {
    this.profileForm.setValue({
      email: data.email,
      password: data.password,
      checkbox: data.checkbox,
    });
  }

  getDataFromLocalStorage(): void {
    if (localStorage.getItem('data')) {
      const deCodedData: string = atob(<string>localStorage.getItem('data'));
      const dataFromLocalStorage: Data = JSON.parse(deCodedData);
      this.setValueToProfileForm(dataFromLocalStorage);
    }
  }
}
