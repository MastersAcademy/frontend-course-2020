import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-forms';
  authorizationForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,
        Validators.email]),
    password: new FormControl('',
      [Validators.required,
        Validators.pattern(/[A-z]/)]
    ),
    checkbox: new FormControl()
  })

  isControlInvalid(controlName: string): boolean {
    const control = this.authorizationForm.controls[controlName];
    return control.invalid && control.touched;
  }

  onSubmit() {
    const authorizationData = 'Login: ' + `${this.authorizationForm.value.email}` + '     Password: ' + `${this.authorizationForm.value.password}`;
    if(this.authorizationForm.value.checkbox === true) {
      console.log('remembered')
    } else {
      alert(authorizationData)
    }



    // alert('Login: ' + `${this.authorizationForm.value.email}` + '     Password: ' + this.authorizationForm.value.password);
   // const local = localStorage.setItem(JSON.stringify(`${this.authorizationForm.value.email}`), JSON.stringify(`${this.authorizationForm.value.password}`))
   //  console.log(local)
    // alert(`Login: ${this.authorizationForm.value.email},  Password: ${this.authorizationForm.value.password}`)

    // const controls = this.authorizationForm.controls;
    // if (this.authorizationForm.invalid) {
    //   Object.keys(controls)
    //     .forEach(controlName => controls[controlName].markAsTouched());
    //   return;
    // } else {
    //   console.log(this.authorizationForm.value);
    // }
  }
}
