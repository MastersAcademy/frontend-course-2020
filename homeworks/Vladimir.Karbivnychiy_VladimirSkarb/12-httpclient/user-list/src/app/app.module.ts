import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {appServices} from './services';
import {UserComponent} from './components/user/user.component';
import {LoaderInterceptor} from "./interceptor/loader.interceptor";
import {UserListComponent} from "./components/user-list/user-list.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...appServices,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
