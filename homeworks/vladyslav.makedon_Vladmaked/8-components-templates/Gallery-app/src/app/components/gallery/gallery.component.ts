import {Component} from '@angular/core';
import {Image, IMAGES} from '../../image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  images: Image[] = IMAGES;
  isLoadedImage: boolean = false;
  selectedImage?: Image;
  imageSelectedIndex: number = 0;

  constructor() {
  }

  setImageLoadStatus(imageLoadStatus: boolean): void {
    this.isLoadedImage = imageLoadStatus;
  }

  setSelectedImage(selectedImage: Image): void {
    this.selectedImage = selectedImage;
  }

  setImageSelectedIndex(imageSelectedIndex: number): void {
    this.imageSelectedIndex = imageSelectedIndex;
  }

  getIsImageSelected(image: Image): boolean {
    return this.selectedImage === image;
  }
}
