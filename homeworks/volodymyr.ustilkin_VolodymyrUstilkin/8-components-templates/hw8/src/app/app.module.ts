import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GalleryImagesComponent} from './gallery-images/gallery-images.component';
import {FormsModule} from '@angular/forms';
import {PreviewImageComponent} from './gallery-images/preview-image/preview-image.component';

@NgModule({
    declarations: [
        AppComponent,
        GalleryImagesComponent,
        PreviewImageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
