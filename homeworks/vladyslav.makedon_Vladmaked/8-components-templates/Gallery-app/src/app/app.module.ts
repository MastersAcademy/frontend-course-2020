import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoaderComponent } from './components/loader/loader.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { SelectedImageComponent } from './components/selected-image/selected-image.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LoaderComponent,
    GalleryItemComponent,
    SelectedImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
