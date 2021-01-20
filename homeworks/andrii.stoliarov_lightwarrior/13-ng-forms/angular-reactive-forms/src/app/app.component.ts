import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EncodeDataFormService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: any;

  private decodedDataEmail: string = '';

  private decodedDataPassword: string = '';

  constructor(private fb: FormBuilder, private encodeDataFormService: EncodeDataFormService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      checkbox: new FormControl(false, [
        Validators.required
      ])
    });

    const getLocalStorageEmail: string = localStorage.getItem('email') || '';
    const getLocalStoragePassword: string = localStorage.getItem('password') || '';

    this.decodedDataEmail = window.atob(getLocalStorageEmail);
    this.decodedDataPassword = window.atob(getLocalStoragePassword);

    this.form.patchValue({
      email: this.decodedDataEmail,
      password: this.decodedDataPassword
    });
  }

  isInvalidAndTouched(fieldName: string): boolean {
    return (this.form.get(fieldName).invalid && this.form.get(fieldName).touched);
  }

  isRequired(fieldName: string): boolean {
    return this.form.get(fieldName).errors.required;
  }

  isErrors(fieldName: string): boolean {
    return this.form.get(fieldName).errors.email;
  }

  submit() {
    if (this.form.invalid) return;

    const formData = {...this.form.value};

    alert(`Login successfully. Email: ${formData.email}, password: ${formData.password}`)

    if (formData.checkbox) {
      this.encodeDataFormService.setDataLocalStorage();
    }

   this.form.reset();
  }

}
