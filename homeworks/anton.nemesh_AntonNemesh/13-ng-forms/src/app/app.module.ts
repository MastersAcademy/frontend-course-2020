import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TextFieldComponent } from './text-field/text-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    PasswordFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
