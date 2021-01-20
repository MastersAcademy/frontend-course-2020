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
    const auth: Auth = authService.getFromLocalStorage();
    this.signInControl = this.formBuilder.group({
      loginControl: [auth?.email || ' ', [Validators.required, Validators.email, Validators.minLength(10)]],
      passwordControl: [auth?.password ||  '', [Validators.required, Validators.minLength(8)]],
      rememberControl: [false]
    });
  }

  onSubmit(): void {
    const email = this.signInControl?.get('loginControl')?.value;
    const password = this.signInControl?.get('passwordControl')?.value;
    const rememberControl = this.signInControl?.get('rememberControl')?.value;
    alert(`Email is ${email}, Password is ${password}`)
    if (rememberControl) {
      this.authService.setOnLocalStorage(email, password)
    }
  }
}
