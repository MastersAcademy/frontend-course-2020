import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  formGroupData!: FormGroup;
  login!: string | null;
  password!: string | null;
  rememberForm!: boolean;
  hide: boolean = true;

  toggleHidePass() {
    this.hide = !this.hide;
  }

  ngOnInit() {
      this.getStore();
      this.formGroupData = new FormGroup({
      login: new FormControl(this.login, [
          Validators.email,
          Validators.required]),
      password: new FormControl(this.password, [
          Validators.required,
          Validators.minLength(5),
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

