import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modules } from './content/modules';
import { SharedModule } from './content/navigation/shared.module';
import { services } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ...modules,

  ],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
