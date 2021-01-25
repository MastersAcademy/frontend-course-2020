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
      checkbox: [false]
    });

    const { email, password } = this.encodeDataFormService.get();

    this.form.patchValue({ email, password });

  }

  isControlInvalid(fieldName: string): boolean {
    return (this.form.get(fieldName).invalid && this.form.get(fieldName).touched);
  }

  getContolError(controlName: string): string | null {
    const control = this.form.get(controlName);
    if (control.errors.required) return 'The field cannot be empty';
    if (control.errors.email) return 'Enter correct email';
    return null;
  }

  submit() {
    if (this.form.invalid) return;

    const formData = {...this.form.value};

    alert(`Login successfully. Email: ${formData.email}, password: ${formData.password}`)

    if (formData.checkbox) {
      this.encodeDataFormService.set(formData);
    }

   this.form.reset();
  }

}
