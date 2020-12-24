import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { appService } from "./services";
import { VehicleComponent } from './vehicle/vehicle.component';
import { appPipes } from "./pipes";
import { appDirectives } from "./directives";

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ...appPipes,
    ...appDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ...appService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
