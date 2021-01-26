import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserDataService} from './services';
import {UserData} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userDataForm!: FormGroup;
  userData!: UserData;

  constructor(private formBuilder: FormBuilder, private userDataService: UserDataService) {
  }

  ngOnInit(): void {
    this.initializeUserDataForm();
    this.getUserData();
    this.setUserDataFormState();
  }

  initializeUserDataForm(): void {
    this.userDataForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        isCheckboxRememberMe: false
      })
    });
  }


  getUserData(): void {
    this.userData = this.userDataService.getUserData();
  }

  setUserDataFormState(): void {
    const userData = this.userData;
    this.userDataForm.setValue({userData});
  }

  submit(): void {
    if (this.userDataForm.invalid) {
      return;
    }

    this.userDataService.saveUserData(this.userDataForm.value.userData);

    const email = this.userDataForm.value.userData.email;
    const password = this.userDataForm.value.userData.password;
    alert(`Email: ${email}\nPassword: ${password}`);

    this.userDataForm.reset();
  }

  isFormControlInvalid(formControl: string): boolean | undefined {
    return this.userDataForm
      .get(`userData.${formControl}`)?.touched && this.userDataForm.get(`userData.${formControl}`)?.invalid;
  }

  isEmailErrorInFormControl(): boolean {
    return this.userDataForm.get('userData.email')?.errors?.email;
  }

  isErrorInFormControl(formControl: string, errorType: string): boolean {
    return this.userDataForm.get(`userData.${formControl}`)?.errors?.[errorType];
  }

  getFormControlActualLength(): number {
    return this.userDataForm.get('userData.password')?.errors?.minlength.actualLength;
  }

  getFormControlMinLength(): number {
    return this.userDataForm.get('userData.password')?.errors?.minlength.requiredLength;
  }
}
