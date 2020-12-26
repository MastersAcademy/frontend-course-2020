import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {appServices} from './services';
import {appDirectives} from './directives';
import {appPipes} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ...appDirectives,
    ...appPipes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ...appServices,
    ...appPipes,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
