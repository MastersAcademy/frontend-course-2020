import { Component } from '@angular/core';

import { GalleryService } from './services/gallery.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'gallery';
    public url: string | null = null;

    constructor(private galleryService: GalleryService) {
        this.galleryService.onClickGetUrl.subscribe(url => this.url = url);
    }
}
