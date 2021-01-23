import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule} from "./modules/home/home.module";
import {AccountModule} from "./modules/account/account.module";
import {AccessoriesModule} from "./modules/accessories/accessories.module";
import {SharingModule} from "./modules/sharing/sharing.module";
// import { HomeComponent } from './home/home.component';
// import { AccountComponent } from './account/account.component';
// import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AccountComponent,
    // AccessoriesComponent,
    // AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AccountModule,
    AccessoriesModule,
    SharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
