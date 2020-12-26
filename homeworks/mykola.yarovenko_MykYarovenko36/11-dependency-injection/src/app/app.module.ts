import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { appDirectives } from './directives';
import { appPipes } from './pipes';
import { MockWehicleComponent } from './mock-wehicle/mock-wehicle.component';

@NgModule({
    declarations: [
      AppComponent,
      MockWehicleComponent,
      ...appDirectives,
      ...appPipes,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [
      ...appServices,
      ...appPipes,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
