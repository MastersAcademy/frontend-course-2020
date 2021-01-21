import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { AccountModule } from './modules/account/account.module';
import { AccessoriesModule } from './modules/accessories/accessories.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AccountModule,
    AccessoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
