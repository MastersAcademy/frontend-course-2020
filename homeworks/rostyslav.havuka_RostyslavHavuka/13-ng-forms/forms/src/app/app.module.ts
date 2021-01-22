import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponentComponent } from './password-input-component/password-input-component.component';
import { EmailInputComponent } from './email-input/email-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponentComponent,
    EmailInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
