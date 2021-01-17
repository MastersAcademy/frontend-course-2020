import { Component } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-forms';

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(''),
  });





  public onSubmit(): void {
    // console.warn(this.profileForm.value);
    this.printFormFieldsAlert();
  }

  public printFormFieldsAlert(): void {
    alert(
      '\nFORM FIELDS\n\n' +
      'email:  ' + this.profileForm.value.email +
      '\npassword:  ' + this.profileForm.value.password +
      '\nremember:  ' + this.profileForm.value.remember
      );
  }
}
