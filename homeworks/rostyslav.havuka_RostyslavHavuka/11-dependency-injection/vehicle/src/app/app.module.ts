import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { InfoCarPipe } from './pipes';
import { CarLinkPipe } from './pipes';
import { ChangeHttp } from './directives';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    InfoCarPipe,
    ChangeHttp,
    CarLinkPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],

  providers: [...appServices],

  bootstrap: [AppComponent]
})

export class AppModule { }
