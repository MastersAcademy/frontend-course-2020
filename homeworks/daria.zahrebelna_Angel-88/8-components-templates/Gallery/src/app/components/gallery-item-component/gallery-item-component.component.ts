import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {ImagesData} from "../../Interfaces/images-data";

@Component({
    selector: 'app-gallery-item-component',
    templateUrl: './gallery-item-component.component.html',
    styleUrls: ['./gallery-item-component.component.css']
})
export class GalleryItemComponentComponent implements OnInit {

    @Input() image!: ImagesData;
    @Output() selectedImageEvent = new EventEmitter<ImagesData>();
    @Output() isLoadedImageEvent = new EventEmitter<boolean>();
    public isLoadedImage: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public assignStateImage(): void {
        this.isLoadedImage = true;
        this.isLoadedImageEvent.emit(this.isLoadedImage);
    }

    public assignSelectedImage(image: ImagesData): void {
        this.selectedImageEvent.emit(image);
    }
}
