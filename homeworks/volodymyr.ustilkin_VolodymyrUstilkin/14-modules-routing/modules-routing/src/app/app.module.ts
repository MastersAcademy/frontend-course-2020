import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {services} from "./services";
import {modules} from "./modules";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
  ],
  providers: [
    services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
