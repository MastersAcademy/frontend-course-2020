import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { InfoCarPipe } from './pipes/info-car.pipe';
import { ProtocolCarPipe } from './pipes/protocol-car.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChangeHttp } from './directives/http-car.directive';
import {MatButtonModule} from '@angular/material/button';
import { CurrencyCodeCarPipe } from './pipes/currency-code-car.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoCarPipe,
    ProtocolCarPipe,
    ChangeHttp,
    CurrencyCodeCarPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],

  providers: [appServices],

  bootstrap: [AppComponent]
})

export class AppModule { }
