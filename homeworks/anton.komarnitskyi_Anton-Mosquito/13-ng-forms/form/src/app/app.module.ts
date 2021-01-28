import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { EmailComponent } from './form/email/email.component';
import { PasswordComponent } from './form/password/password.component';
import { CheckboxComponent } from './form/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EmailComponent,
    PasswordComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
