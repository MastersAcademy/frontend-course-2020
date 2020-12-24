import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appPipes } from './pipes';
import { appDirectives } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    ...appPipes,
    ...appDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...appServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
