import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserListItemComponent} from './components/user-list-item/user-list-item.component';
import {UserListLoaderComponent} from './components/user-list-loader/user-list-loader.component';
import {appServices} from './services';
import {INTERCEPTOR_PROVIDER} from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    UserListLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ...appServices,
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
