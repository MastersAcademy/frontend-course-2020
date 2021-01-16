import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { passwordValidator } from './custom-validation/password';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('form') form!: HTMLFormElement;

  public emailControl!: FormControl;
  public passwordControl!: FormControl;
  public checkboxControl!: FormControl;

  private stateEmail?: string = ''
  private statePassword?: string = ''
  private stateCheckbox?: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor() { }


  ngOnInit(): void {
    this.findDataInLocalStorage();

    this.emailControl = new FormControl(this.stateEmail, [Validators.required, Validators.email]);
    this.passwordControl = new FormControl(this.statePassword, [Validators.required, Validators.minLength(6), passwordValidator]);
    this.checkboxControl = new FormControl(this.stateCheckbox);

    this.subscription.add(this.emailControl.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.stateEmail = this.emailControl.value;
      }
    }));

    this.subscription.add(this.passwordControl.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.statePassword = this.passwordControl.value;
      }
    }));

    this.subscription.add(this.checkboxControl.valueChanges.subscribe((value) => {
      this.stateCheckbox = value;
    }));
  }

  private findDataInLocalStorage() :void {
    const emailQuery = localStorage.getItem("email")!;
    const passwordQuery = localStorage.getItem("password")!;
    const checkboxQuery = localStorage.getItem("remember")!;

    if (emailQuery === null && passwordQuery === null) {
      this.stateEmail = '';
      this.statePassword = '';
      this.stateCheckbox = false;
    } else {
      this.stateEmail = atob(JSON.parse(emailQuery));
      this.statePassword = atob(JSON.parse(passwordQuery));
      this.stateCheckbox = JSON.parse(checkboxQuery);
    }
  }

  ngAfterViewInit(): void {
    this.subscription.add(fromEvent<Event>(this.form.nativeElement, 'submit').subscribe((e) => {
      if (this.stateEmail && this.statePassword && this.stateCheckbox) {
        alert(`Email - ${this.stateEmail}, password - ${this.statePassword}`)
        localStorage.setItem("email", JSON.stringify(btoa(this.stateEmail)));
        localStorage.setItem("password", JSON.stringify(btoa(this.statePassword)));
        localStorage.setItem("remember", JSON.stringify(this.stateCheckbox));
      } else {
        alert(`Email - ${this.stateEmail}, password - ${this.statePassword}`)
      }
      this.emailControl.reset();
      this.passwordControl.reset();
      this.checkboxControl.reset();
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
