import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { VehiclePipe } from './pipes/vehicle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VehiclePipe
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
export class AppModule { }
