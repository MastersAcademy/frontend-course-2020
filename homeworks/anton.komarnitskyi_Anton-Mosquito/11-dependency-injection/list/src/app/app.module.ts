import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderComponent } from './slider/slider.component';
import {appPipes} from './pipes';
import {appServices} from './services';
import {appDirectives} from './directives';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ...appPipes,
    ...appDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [...appServices,...appPipes],
  bootstrap: [AppComponent]
})
export class AppModule { }
