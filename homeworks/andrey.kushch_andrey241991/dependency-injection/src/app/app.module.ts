import { appServices } from './services/index';
import { appPipes } from './pipes/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ...appPipes,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...appServices,
    ...appPipes,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
