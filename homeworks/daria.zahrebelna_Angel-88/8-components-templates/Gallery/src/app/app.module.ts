import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponentComponent } from './components/gallery-component/gallery-component.component';
import { GalleryItemComponentComponent } from './components/gallery-item-component/gallery-item-component.component';
import { GalleryDetailItemComponent } from './components/gallery-detail-item/gallery-detail-item.component';
import { GalleryLoaderItemComponent } from './components/gallery-loader-item/gallery-loader-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponentComponent,
    GalleryItemComponentComponent,
    GalleryDetailItemComponent,
    GalleryLoaderItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
