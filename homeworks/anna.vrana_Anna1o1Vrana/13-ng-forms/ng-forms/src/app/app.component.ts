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

  onRemember() {
    if (this.authorizationForm.value.checkbox === true) {
      // this.saveInLocalStorage()
      this.saveService.saveData(this.authorizationForm.value)
    }
  }

  onSubmit(): void {
    const authorizationData = 'Login: ' + `${this.authorizationForm.value.email}` + '     Password: ' + `${this.authorizationForm.value.password}`;
    alert(authorizationData)
    this.onRemember()
  }

  ngOnInit() {
    if (localStorage.getItem('data')) {
      const dataEncode = JSON.parse(atob(localStorage.getItem('data')))
      this.authorizationForm.setValue({
        'email': dataEncode.email,
        'password': dataEncode.password,
        'checkbox': ''
      })
    }

  }
}
