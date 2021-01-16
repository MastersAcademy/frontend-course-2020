import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public email: string = '';
  public password: string = '';
  public savedEmail: string = '';
  public savedPassword: string = '';
  public isChecked: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  userForm = new FormGroup({
    email: new FormControl(this.email, [
      Validators.required,
      Validators.minLength(10)
    ]),
    password: new FormControl(this.password, [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  ngOnInit() {
    this.getData('email', 'password');
  }

  public saveInputData(valueEmail: string, valuePassword: string) {
    if (this.isChecked) {
      this.localStorageService.set('email', valueEmail);
      this.localStorageService.set('password', valuePassword);
      return;
    }
    return;
  }

  private getData(keyEmail: string, keyPassword: string) {
    this.savedEmail = this.localStorageService.get(keyEmail);
    this.savedPassword = this.localStorageService.get(keyPassword);
  }

  public showInputData(email: string, password: string): void {
    alert('Email: ' + email + '   Password: ' + password);
  }

  public checkCheckBox(value: any): void {
    this.isChecked = value.target.checked;
  }
}
