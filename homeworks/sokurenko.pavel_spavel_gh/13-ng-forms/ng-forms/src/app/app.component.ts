import { Component } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-forms';

  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(''),
  });





  public onSubmit(): void {
    // console.warn(this.authForm.value);
    this.printFormFieldsAlert();
  }

  public printFormFieldsAlert(): void {
    alert(
      '\nFORM FIELDS\n\n' +
      'email:  ' + this.authForm.value.email +
      '\npassword:  ' + this.authForm.value.password +
      '\nremember:  ' + this.authForm.value.remember
      );
  }
}
