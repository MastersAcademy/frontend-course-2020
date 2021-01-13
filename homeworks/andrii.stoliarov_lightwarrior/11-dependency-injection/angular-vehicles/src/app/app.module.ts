import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { appServices } from './services';
import { appDirectives } from './directives';
import { appPipes } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    ...appDirectives,
    ...appPipes
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ...appServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
