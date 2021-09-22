import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataModel } from './models/user-data-model'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ng-forms';

    public hidePassword: boolean = true;

    ngOnInit(): void {
        this.restoryDataForm();
    }

    public loginForm: FormGroup = new FormGroup({
        userEmail: new FormControl('', [Validators.required, Validators.email]),
        userPassword: new FormControl('', [Validators.required]),
        rememberMe: new FormControl(false)
    })

    public getErrorMessageMail(): string {
        if (this.loginForm.controls['userEmail'].hasError('required')) {
            return 'You must enter a value';
        }
        return this.loginForm.controls['userEmail'].hasError('email') ? 'Not a valid email' : '';
    }

    public getErrorMessagePassword(): string {
        if (this.loginForm.controls['userPassword'].hasError('required')) {
            return 'You must enter a password';
        }
    }

    get userEmail(): string {
        return this.loginForm.get('userEmail').value as string;
    }

    get userPassword(): string {
        return this.loginForm.get('userPassword').value as string;
    }

    private saveDataToLStorage(): void {
        if (this.loginForm.get('rememberMe').value) {
            const userData: UserDataModel = { 'userEmail': this.userEmail, 'userPassword': this.userPassword };
            const userDataJson: string = JSON.stringify(userData);
            const userDataB64: string = btoa(userDataJson);
            localStorage.setItem('userData', userDataB64);
        } else {
            localStorage.removeItem('userData');
        }
    }

    get getSaveDataFromLStorage(): UserDataModel | null {
        const userDataB64: string | null = localStorage.getItem('userData');
        if (userDataB64) {
            const userDataJson: UserDataModel = JSON.parse(atob(userDataB64));
            return userDataJson;
        }
        return null;
    }

    private restoryDataForm(): void {
        const userData: UserDataModel | null = this.getSaveDataFromLStorage;
        if (userData) {
            this.loginForm.get('userEmail').setValue(userData.userEmail);
            this.loginForm.get('userPassword').setValue(userData.userPassword);
            this.loginForm.get('rememberMe').setValue(true);
        }
    }

    public submit(): void {
        this.saveDataToLStorage();
        alert(`User login: ${this.userEmail}\nUser password: ${this.userPassword}`);
        this.loginForm.reset();
    }
}
