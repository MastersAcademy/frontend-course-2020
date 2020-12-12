import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { FullImageComponent } from './full-image/full-image.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ImagesListComponent,
    FullImageComponent
  ],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
