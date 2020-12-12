import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GallaryComponent } from './gallary/gallary.component';
import { GallaryItemComponent } from './gallary-item/gallary-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    GallaryItemComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
