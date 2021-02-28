import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicles/vehicles.component';

import { appDirectives } from './directives';
import { appServices } from './services';
import { appPipes } from './pipes';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
    declarations: [
        AppComponent,
        VehicleComponent,
        ...appPipes,
        ...appDirectives,
        LoaderComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        ...appServices,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
