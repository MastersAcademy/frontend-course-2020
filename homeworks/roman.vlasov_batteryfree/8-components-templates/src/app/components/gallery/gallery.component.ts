import { Component, OnInit } from '@angular/core';

import { GalleryService } from '../../services/gallery.service';
import { Image } from '../../model/image';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

    public images: Image[];

    constructor(private galleryService: GalleryService) { }

    ngOnInit(): void {
        this.getGallery();
    }

    private getGallery() {
        this.images = this.galleryService.getGallery();
    }
}
