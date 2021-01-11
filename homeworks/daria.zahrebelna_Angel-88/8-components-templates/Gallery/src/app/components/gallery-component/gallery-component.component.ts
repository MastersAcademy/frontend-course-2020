import {Component, OnInit} from '@angular/core';
import {IMAGES, ImagesData} from "../../Interfaces/images-data";

@Component({
    selector: 'app-gallery-component',
    templateUrl: './gallery-component.component.html',
    styleUrls: ['./gallery-component.component.css']
})
export class GalleryComponentComponent implements OnInit {
    public images: ImagesData[] = IMAGES;
    public selectedImage!: ImagesData;
    public isLoadedImage: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    assignSelectedImage($event: ImagesData) {
        this.selectedImage = $event;
    }
}
