import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {appServices} from "./services";
import {appDirective} from "./directives";
import {appPipes} from "./pipes";

@NgModule({
  declarations: [
    AppComponent,
    ...appDirective,
    ...appPipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ...appServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
