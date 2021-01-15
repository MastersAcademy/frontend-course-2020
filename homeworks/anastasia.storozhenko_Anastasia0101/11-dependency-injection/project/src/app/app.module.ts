import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleComponent } from './component/vehicle/vehicle.component';
import { VehicleListComponent } from './component/vehicle-list/vehicle-list.component';
import { vehicleServices } from './component/vehicle-list/services';
import { vehiclePipe } from './component/vehicle/pipes';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleListComponent,
    ...vehiclePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...vehicleServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
