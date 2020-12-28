import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { appPrisePipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ...appPrisePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ...appServices,
    ...appPrisePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
