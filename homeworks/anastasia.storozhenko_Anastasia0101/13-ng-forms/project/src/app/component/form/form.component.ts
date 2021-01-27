import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      isRememberUserData: [false]
    })
  }

  ngOnInit() {
    this.restoreData();
  }

  public saveInputData(): void {
    if(this.userForm.value.isRememberUserData) {
      this.authService.set(this.userForm.value);
    }
    return;
  }

  private restoreData() {
    this.userForm.patchValue(this.authService.get());
  }

  public showInputData(): void {
    alert('Email: ' + this.userForm.value.email + 'Password: ' + this.userForm.value.password);
  }
  
  public onFormSubmit() {
    this.showInputData();
    this.saveInputData();
  }
}
