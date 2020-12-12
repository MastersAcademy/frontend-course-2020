import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../assets/data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = IMAGES;
  isLoaded = false;

  selectedImageIndex = 0;
  selectedImageId?: string;
  public selectedImageUrl = '';
  maxIndexOfImagesObj = this.images.length - 1;

  constructor() {}

  ngOnInit(): void {}

  loaded(): void {
    this.isLoaded = true;
    this.defineSelectedImageFromIndex(0);
  }

  selectImageEnevt(event: Event): void {
    this.defineSelectedImageFromId((event.target as Element).id);
  }

  defineSelectedImageFromId(newImageId: string): void {
    this.selectedImageId = newImageId;
    const tmpImage = this.images.find((i) => i.id === this.selectedImageId);
    this.selectedImageUrl = '' + tmpImage?.urls.regular;
    this.selectedImageIndex = this.images.findIndex(
      (i) => i.id === this.selectedImageId
    );
  }

  defineSelectedImageFromIndex(newImageIndex: number): void {
    this.selectedImageUrl = this.images[newImageIndex].urls.regular;
    this.selectedImageId = this.images[newImageIndex].id; // сделать красиво и в другом месте
  }

  swithcToNextImage(direction: string): void {
    if (direction === 'prev') {
      if (this.selectedImageIndex === 0) {
        this.selectedImageIndex = this.images.length - 1;
      } else {
        this.selectedImageIndex--;
      }
    } else if (direction === 'next') {
      if (this.selectedImageIndex === this.images.length - 1) {
        this.selectedImageIndex = 0;
      } else {
        this.selectedImageIndex++;
      }
    }
    this.defineSelectedImageFromIndex(this.selectedImageIndex);
  }

  
}
