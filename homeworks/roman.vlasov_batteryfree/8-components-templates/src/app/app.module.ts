import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { TileComponent } from './components/tile/tile.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
    declarations: [
        AppComponent,
        ImageComponent,
        TileComponent,
        GalleryComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        HttpClientModule,
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
