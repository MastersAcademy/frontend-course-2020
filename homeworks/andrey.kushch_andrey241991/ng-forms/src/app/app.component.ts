import { Auth } from './services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-forms';
  signInControl!: FormGroup;


  constructor(private readonly authService: AuthService, private formBuilder: FormBuilder) {
    const auth: Auth = authService.getData();
    this.signInControl = this.formBuilder.group({
      login: [auth.email, [Validators.required, Validators.email]],
      password: [auth.password, Validators.required],
      remember: [false]
    });
  }

  onSubmit(): void {
    const { login, password, remember } = this.signInControl.value;
    alert(`Email is ${login}, Password is ${password}`)
    if (remember) {
      this.authService.setData(login, password)
    }
  }
}
