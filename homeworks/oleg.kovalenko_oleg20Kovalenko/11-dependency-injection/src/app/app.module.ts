import { appPipe } from './pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appService } from './service';
import { appDirective } from './directive';

@NgModule({
  declarations: [
    AppComponent,
    ...appDirective,
    ...appPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ...appService,
    ...appPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
