import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SaveAuthService} from "./service";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-forms';
  authorizationForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
    rememberMe:['']
  })

  constructor(
    private saveService: SaveAuthService,
    private FormBuilder: FormBuilder) {
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.authorizationForm.get(controlName);
    return control.invalid && control.touched;
  }

  onRemember() {
    if (this.authorizationForm.value.checkbox) {
      this.saveService.saveData(this.authorizationForm.value)
    }
  }

  onSubmit(): void {
    const authorizationData = `Login:  ${this.authorizationForm.value.email}     Password:  ${this.authorizationForm.value.password}`;
    alert(authorizationData)
    this.onRemember()
  }

  ngOnInit() {
    this.saveService.checkLocalStorage(this.authorizationForm)

  }
}
