import { Component } from '@angular/core';
import { images } from "../data";
import Image from '../models/image';
const FIRST_IMG_POSITION: number = 0;
const LAST_IMG_POSITION: number = images.length - 1

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html'
})
export class GalleryContainerComponent {
  images: Image[] = images;
  imgPosition: number = 0;

  get currentImg(): Image {
    return this.images[this.imgPosition];
  }

  setCurrentImg(position: number): void {
    this.imgPosition = position;
  }

  onNext() {
    if (this.imgPosition === LAST_IMG_POSITION) {
      this.imgPosition = FIRST_IMG_POSITION;
    } else {
      this.imgPosition++;
    }
    this.setCurrentImg(this.imgPosition);
  }

  onPrev() {
    if (this.imgPosition === FIRST_IMG_POSITION) {
      this.imgPosition = LAST_IMG_POSITION;
    } else {
      this.imgPosition--;
    }
    this.setCurrentImg(this.imgPosition);
  }
}
