import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    form!: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(atob(localStorage.getItem('email') || ''), [Validators.required, Validators.email]),
            password: new FormControl(atob(localStorage.getItem('password') || ''), [Validators.required, Validators.minLength(8)]),
            checkbox: new FormControl('')
        });
    }

    submit() {
        if (this.form.invalid) return;

        if (this.form.value.checkbox) {
            localStorage.setItem('email', btoa(this.form.value.email));
            localStorage.setItem('password', btoa(this.form.value.password));
        } else {
            localStorage.clear();
        }

        alert(`Email: ${this.form.value.email}\nPassword: ${this.form.value.password}`);

        this.form.reset();
    }
}
