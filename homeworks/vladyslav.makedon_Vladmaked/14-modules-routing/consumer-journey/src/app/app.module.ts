import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {appModules} from './modules';
import {appServices} from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...appModules
  ],
  providers: [
    ...appServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
