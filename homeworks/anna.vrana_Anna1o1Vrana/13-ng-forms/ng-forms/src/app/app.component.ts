import { Component, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";
import { SaveAuthService } from "./service";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-forms';
  authorizationForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false]
  })

  constructor(
    private saveService: SaveAuthService,
    private FormBuilder: FormBuilder) {
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.authorizationForm.get(controlName);
    return control.invalid && control.touched;
  }

  onRemember(): void {
    if (this.authorizationForm.value.rememberMe) {
      this.saveService.saveData(this.authorizationForm.value)
    }
  }

  onSubmit(): void {
    const authorizationData = `Login:  ${this.authorizationForm.value.email}     Password:  ${this.authorizationForm.value.password}`;
    alert(authorizationData)
    this.onRemember()
  }

  ngOnInit(): void {
    const dataEncode = this.saveService.getData()
    if(dataEncode) {
      this.authorizationForm = this.FormBuilder.group({
        email: [dataEncode.email, [Validators.required, Validators.email]],
        password: [dataEncode.password, [Validators.required]],
        rememberMe: [false]
      })
    } else {
      this.authorizationForm = this.FormBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        rememberMe: [false]
      })
    }
  }
}
