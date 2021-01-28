import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./modules/shared/shared.module";
import {modules} from "./modules";
import {JourneyService} from "./services/journey.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ...modules
  ],
  providers: [
    JourneyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
