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
  maxIndexOfImagesObj = this.images.length - 1;

  public selectedImageUrl = '';

  selectedImageIndex = 0;
  selectedImageId?: string;

  constructor() {}

  ngOnInit(): void {}

  selectImageEnevt(event: Event): void {
    this.defineSelectedImageId((event.target as Element).id);
  }

  defineSelectedImageId(newImageId: string): void {
    this.selectedImageId = newImageId;
    const tmpImage = this.images.find((i) => i.id === this.selectedImageId);
    this.selectedImageUrl = '' + tmpImage?.urls.regular;
    this.selectedImageIndex = this.images.findIndex(
      (i) => i.id === this.selectedImageId
    );
  }


  swithcToNextImage(data: string): void {
    if (data === 'prev') {
      if (this.selectedImageIndex === 0) {
        this.selectedImageIndex = this.images.length - 1;
      } else {
        this.selectedImageIndex--;
      }
    } else if (data === 'next') {
      if (this.selectedImageIndex === this.images.length - 1) {
        this.selectedImageIndex = 0;
      } else {
        this.selectedImageIndex++;
      }
    }
    this.chooseImage(this.selectedImageIndex);
  }

  chooseImage(newIndex: number): void {
    this.selectedImageUrl = this.images[newIndex].urls.regular;
    this.selectedImageId = this.images[newIndex].id; // сделать красиво и в другом месте
  }

  loaded(): void {
    this.isLoaded = true;
  }
}
