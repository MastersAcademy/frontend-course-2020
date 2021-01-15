import {Component, OnInit} from '@angular/core';
import {images} from './image-list';
import {IPreviewImage} from "./preview-image/ipreview-image";
import {PreviewImage} from "./preview-image/preview-image";
// import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'app-gallery-images',
    templateUrl: './gallery-images.component.html',
    styleUrls: ['./gallery-images.component.css']
})
export class GalleryImagesComponent implements OnInit {
    images: IPreviewImage[];
    mainImage: IPreviewImage;

    componentImgCompleteLoad(id: number): void {
        console.log('loaded: ' + id);
    }

    constructor() {
    }

    setNewActiveImage(id: number): void {
        this.images.forEach((e) => {
            e.isSelected = e.id === id;
        });
        this.mainImage = this.images[id];
    }

    ngOnInit(): void {
        this.loadImageUrls();
        this.images[0].isSelected = true;
        this.mainImage = this.images[0];
    }

    loadImageUrls(): void {
        this.images = images.map((elem, index) => {
            const img = new PreviewImage();
            img.id = index;
            img.smallUrl = elem.urls.small;
            img.fullUrl = elem.urls.full;
            return img;
        });
    }
}
