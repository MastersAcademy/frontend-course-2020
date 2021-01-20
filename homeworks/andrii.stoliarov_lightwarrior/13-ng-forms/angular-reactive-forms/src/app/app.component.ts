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
  private dataEmail: string = '';
  private dataPassword: string = '';

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

    this.dataEmail = this.encodeDataFormService.getDecodedDataEmail();
    this.dataPassword = this.encodeDataFormService.getDecodedDataPassword();

    this.form.patchValue({
      email: this.dataEmail,
      password: this.dataPassword
    });
  }

  isControlInvalid(fieldName: string): boolean {
    return (this.form.get(fieldName).invalid && this.form.get(fieldName).touched);
  }

  isRequired(fieldName: string): boolean {
    return this.form.get(fieldName).errors.required;
  }

  isErrors(fieldName: string): boolean {
    return this.form.get(fieldName).errors.email;
  }

  getFieldRequiredError(fieldName: string): string {
    return 'The field cannot be empty.';
  }

  getFieldError(fieldName: string): string {
    return 'Enter correct email.';
  }


  submit() {
    if (this.form.invalid) return;

    const formData = {...this.form.value};

    alert(`Login successfully. Email: ${formData.email}, password: ${formData.password}`)

    if (formData.checkbox) {
      this.encodeDataFormService.setDataLocalStorage(formData);
    }

   this.form.reset();
  }

}
