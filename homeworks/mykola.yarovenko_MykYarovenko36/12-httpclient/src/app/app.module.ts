import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { appServices } from './services';
import { appDirectives } from './directives';
import { AuthInterceptor } from './interceptor/auth.interseptor';
import { CardItemComponent } from './card-item/card-item.component';
import { PaginationItemComponent } from './pagination-item/pagination-item.component';

@NgModule({
  declarations: [
    ...appDirectives,
    AppComponent,
    CardComponent,
    CardItemComponent,
    PaginationItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ...appServices,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
