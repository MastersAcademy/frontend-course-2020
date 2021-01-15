import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  form!: FormGroup;
  
  ngOnInit() {

    this.form = new FormGroup ({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(6), Validators.required]),
      rememberMe: new FormControl(false)
    });

    this.checkLocalStorage();
  }

  get email() { 
    return this.form.get('email')!; 
  }

  get password() {
    return this.form.get('password')!; 
  }

  get rememberMe() { 
    return this.form.get('rememberMe')!; 
  }

  checkLocalStorage() {
    if (localStorage.getItem('inputsData')) {
      const data = this.decodInputsData();
      this.form.setValue({
        email: data.email,
        password: data.password,
        rememberMe: true
      })    
    }
  }

  submit(): void {
    if (this.form.valid) {
      alert(`You email: ${this.email.value}, password: ${this.password.value}`);
      
      if (this.rememberMe.value) {
        this.encodInputsData();
        this.saveToLocalStorage();
      }
    }
  }

  encodInputsData() {
    const encodedInputsData: string = window.btoa(JSON.stringify(this.form.value));
    return encodedInputsData;
  }

  saveToLocalStorage(): void {
    const encodedInputsData = this.encodInputsData();
    localStorage.setItem('inputsData', encodedInputsData);
  }

  decodInputsData() {
    const decodedInputsData: string = atob(<string>localStorage.getItem('inputsData'));
    const inputsData = JSON.parse(decodedInputsData);
    return inputsData;
  }
}
