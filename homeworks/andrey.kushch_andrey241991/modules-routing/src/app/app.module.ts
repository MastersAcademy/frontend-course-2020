import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { modules } from './modules';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
