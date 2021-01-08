import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptor/interceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loading.service';
import { RadioChoiseComponent }from './radio-choise/radio-choise.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    RadioChoiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
