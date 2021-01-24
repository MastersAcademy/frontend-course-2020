import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {appServices} from "./services";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderModInterceptor} from "./interceptors/header.mod.interceptor";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ...appServices,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderModInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
