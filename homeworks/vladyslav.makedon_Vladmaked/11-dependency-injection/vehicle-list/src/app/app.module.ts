import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {appServices} from './services';
import {VehicleComponent} from './components/vehicle/vehicle.component';
import {LoaderComponent} from './components/loader/loader.component';
import {appDirectives} from './directives';
import {appPipes} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    LoaderComponent,
    ...appDirectives,
    ...appPipes
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...appServices,
    ...appPipes
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
