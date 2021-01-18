import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  LOGIN = /^[a-z0-9._-]{2,}\@[a-z0-9]+\.[a-z]{2,}$/i;
  PASSWORD = /^[a-z0-9]{5,}$/i;
  formGroupData!: FormGroup;
  login!: string | null;
  password!: string | null;
  rememberForm!: boolean;
  hide: boolean = true;
  passControl!: FormControl;

  toggleHidePass() {
    this.hide = !this.hide;
  }

  ngOnInit() {
      this.getStore();
      this.formGroupData = new FormGroup({
      login: new FormControl(this.login, [
          Validators.required,
          Validators.pattern(this.LOGIN),
        ]),
      password: new FormControl(this.password, [
          Validators.required,
          Validators.pattern(this.PASSWORD),
        ]),
      rememberForm: new FormControl(Boolean),
    });
  }

  public getStore():void {
    let stor = localStorage.getItem('loginParams');
    if (stor !== null) {
      let savedForm = JSON.parse(stor);
      this.login = atob(savedForm.item);
      this.password = atob(savedForm.key);
    } else {
      this.login = null;
      this.password = null;
    }
  }

  public setLoginFormData(): void {
      const formData = {
        item: btoa(this.formGroupData.value.login),
        key: btoa(this.formGroupData.value.password)
      }
      const message = `Your login is saved. login-name: ${this.formGroupData.value.login}, password: ${this.formGroupData.value.password}`;
      this.formGroupData.value.rememberForm? (localStorage.setItem('loginParams', JSON.stringify(formData)),
      alert(message)) : alert(message);
      this.formGroupData.reset();
  }
}

