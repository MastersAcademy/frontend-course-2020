import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { appCharacteristicsPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ...appCharacteristicsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ...appServices,
    ...appCharacteristicsPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
