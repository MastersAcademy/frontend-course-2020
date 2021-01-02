import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appServices } from './services/index';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ParamInterceptor } from './interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    UserCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    ...appServices, {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
