import { formatCurrency } from '@angular/common';
import { Component, OnInit, HostListener} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: any;
  private encodedDataEmail: string = '';
  private decodedDataEmail: string = '';
  private encodedDataPassword: string = '';
  private decodedDataPassword: string = '';

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      checkbox: new FormControl(false, [
        Validators.required
      ])
    });

  }

  submit() {
    if (this.form.invalid) return;

    const formData = {...this.form.value};

    alert(`Login successfully. Email: ${formData.email}, password: ${formData.password}`)

    if (formData.checkbox) {
      this.encodedDataEmail = window.btoa(formData.email);
      this.encodedDataPassword = window.btoa(formData.password);

      localStorage.setItem('email', this.encodedDataEmail);
      localStorage.setItem('password', this.encodedDataPassword);
    }

   this.form.reset();
  }

  @HostListener('window:load')
  onLoadForm(): void {
    const getLocalStorageEmail: string = localStorage.getItem('email') || '';
    const getLocalStoragePassword: string = localStorage.getItem('password') || '';

    this.decodedDataEmail = window.atob(getLocalStorageEmail);
    this.decodedDataPassword = window.atob(getLocalStoragePassword);

    this.form.patchValue({
      email: this.decodedDataEmail,
      password: this.decodedDataPassword
    });
  }

}
