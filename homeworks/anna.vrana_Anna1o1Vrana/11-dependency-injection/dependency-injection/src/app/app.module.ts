import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { appServices } from "./services";
import { appDirective } from "./directive";
import { appPipes } from "./pipes";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ...appDirective,
    ...appPipes,
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
