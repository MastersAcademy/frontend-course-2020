import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-forms';

  ngOnInit(): void {
    this.restore();
  }

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    checkbox: new FormControl(),
  });

  get registerFormControl() {
    return this.profileForm.controls;
  }

  onSubmit() {
    if (this.profileForm.value.checkbox) {
      const itemData: string = btoa(JSON.stringify(this.profileForm.value));
      localStorage.setItem('data', itemData);
    } else {
      localStorage.removeItem('data');
    }
    alert(
      `Email: ${this.profileForm.value.email} Password: ${this.profileForm.value.password}`
    );
    this.profileForm.reset();
  }


  restore(): void {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      const itemData: string = atob(savedData);
      const data = JSON.parse(itemData);
      this.profileForm.setValue({
        email: data.email,
        password: data.password,
        checkbox: data.checkbox,
      });
    }
  }
}
