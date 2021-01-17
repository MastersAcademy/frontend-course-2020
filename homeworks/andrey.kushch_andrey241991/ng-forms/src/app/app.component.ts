import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-forms';
  // loginControl: FormControl;
  signInControl: FormGroup;


  ngOnInit() {
    // this.loginControl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]);
    // this.loginControl.valueChanges.subscribe((value) => console.log(value))
    // this.loginControl.statusChanges.subscribe((status) => console.log(status))

    this.signInControl = new FormGroup({
      loginControl: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]),
      passwordControl: new FormControl('', [Validators.required, Validators.minLength(8)]),
      rememberControl: new FormControl(false)
    });
    this.signInControl.valueChanges.subscribe((value) => console.log(value))
  }

  setOnLocalStorage(){

  }

  getFromLocalStorage(){

  }

  onSubmit() {
    const email = this.signInControl.get('loginControl')?.value;
    const password = this.signInControl.get('passwordControl')?.value;
    const rememberControl = this.signInControl.get('rememberControl')?.value;

    alert(`Email is ${email}, Password is ${password}`)

    // const message = this.signInControl.value;
    // alert(message);
    // TODO: Use EventEmitter with form value
    console.log(rememberControl);
  }


}
