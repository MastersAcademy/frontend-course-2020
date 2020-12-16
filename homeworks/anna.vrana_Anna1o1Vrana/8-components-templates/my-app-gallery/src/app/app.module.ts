import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllImagesComponent } from './all-images/all-images.component';
import { ActiveImageComponent } from './active-image/active-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AllImagesComponent,
    ActiveImageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
