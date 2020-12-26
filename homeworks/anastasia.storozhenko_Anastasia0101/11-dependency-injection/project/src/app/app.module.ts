import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleComponent } from './component/vehicle/vehicle.component';
import { vehicleServices } from './component/vehicle/services';
import {vehiclePipe} from './component/vehicle/pipes';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ...vehiclePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...vehicleServices,
    ...vehiclePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
