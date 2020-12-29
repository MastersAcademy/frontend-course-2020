import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appServices } from './services';
import { AppPipes } from './pipes';
import { appDirectives } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    ...AppPipes,
    ...appDirectives,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [...appServices],

  bootstrap: [AppComponent]
})

export class AppModule { }
