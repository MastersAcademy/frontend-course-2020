import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appServices } from './services';
import { appDirectives } from './directives';
import { appPipes } from './pipes';
import { VehicleComponent } from './components/vehicle/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ...appDirectives,
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
