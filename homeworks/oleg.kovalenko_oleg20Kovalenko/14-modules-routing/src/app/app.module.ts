import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { SharedComponent } from './modules/shared/components/shared/shared.component';
import { services } from './services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    AccessoriesComponent,
    SharedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    services
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
