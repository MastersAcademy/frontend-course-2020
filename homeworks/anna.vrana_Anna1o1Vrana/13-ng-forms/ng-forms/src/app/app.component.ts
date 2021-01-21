import {Component} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {SaveAuthService} from "./service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-forms';
  authorizationForm: FormGroup;
  dataEncode = this.saveService.getData()

  constructor(
    private saveService: SaveAuthService,
    private FormBuilder: FormBuilder) {

    this.authorizationForm = FormBuilder.group({

      email: [this.dataEncode.email, [Validators.required, Validators.email]],
      password: [this.dataEncode.password, [Validators.required]],
      rememberMe: [false]

    });

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
}
