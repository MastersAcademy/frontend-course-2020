import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-forms';
  text = '';

  form  = {
    email: '123',
    password: '321',
    remember: false
  };

  public submit(): void {
    // console.log(a);
    // console.log(b);
    // alert('Warning');
    this.printFormFieldsAlert();
  }

  public printFormFieldsAlert(): void {
    alert(
      '\nFORM FIELDS\n\n' +
      'email:  ' + this.form.email.toString() +
      '\npassword:  ' + this.form.password.toString() +
      '\nremember:  ' + this.form.remember
      );
  }
}
