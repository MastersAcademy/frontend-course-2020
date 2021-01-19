import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SaveAuthService} from "./service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  constructor(private saveService: SaveAuthService) {
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.authorizationForm.get(controlName);
    return control.invalid && control.touched;
  }

  saveInLocalStorage(): void {
    let email = btoa(`${this.authorizationForm.value.email}`)
    let password = btoa(`${this.authorizationForm.value.password}`)
    let checkbox = btoa(`${this.authorizationForm.value.checkbox}`)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('checkbox', checkbox)

    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('password'))
  }

  onRemember(){
    if(this.authorizationForm.value.checkbox === true) {
      this.saveInLocalStorage()
    }
  }
  onSubmit(): void {
    const authorizationData = 'Login: ' + `${this.authorizationForm.value.email}` + '     Password: ' + `${this.authorizationForm.value.password}`;
    alert(authorizationData)
    this.onRemember()
  }

  ngOnInit() {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      this.authorizationForm.setValue(
        {
          'email': atob(localStorage.getItem('email')),
          'password': atob(localStorage.getItem('password')),
          'checkbox': atob(localStorage.getItem('checkbox'))
        })
    }
  }
}
