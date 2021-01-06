import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoaderComponent} from './loader/loader.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {appServices} from "./services";
import {appDirectives} from "./directives";
import {appPipes} from "./pipes";

@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        VehicleComponent,
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
