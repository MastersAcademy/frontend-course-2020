import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modules } from "./modules";
import { LandingComponent } from './modules/landing/components/landing/landing.component';
import { services } from "./services";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [services],
  bootstrap: [AppComponent]
})
export class AppModule { }
