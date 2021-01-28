import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import {services} from "./services";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
