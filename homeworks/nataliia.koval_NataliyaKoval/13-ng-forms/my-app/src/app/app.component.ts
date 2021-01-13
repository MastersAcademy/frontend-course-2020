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
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(6), Validators.required])
    });
  }

  submit(): void {
    if (this.form.valid) {
      alert(`You email: ${this.form.value.email}, password: ${this.form.value.password}`);

    }
  }

  get email() { 
    return this.form.get('email')!; 
  }

  get password() {
    return this.form.get('password')!; 
  }

}
