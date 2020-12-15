import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    ImageSliderComponent,
    GalleryContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
