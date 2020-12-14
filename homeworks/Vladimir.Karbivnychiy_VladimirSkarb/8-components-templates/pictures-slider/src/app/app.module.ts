import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/image-gallery/gallery.component';
import { ImageItemComponent } from './components/image-item/image-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
