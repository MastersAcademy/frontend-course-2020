import { Component } from '@angular/core';
import { images } from "../data";
import { Image } from '../models/image';

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

  get firstImageIndex(): number {
    return 0;
  }

  get lastImageIndex(): number {
    return this.images.length - 1;
  };

  get isFirstImage(): boolean {
    return this.imgPosition === 0;
  }

  get isLastImage(): boolean {
    return this.imgPosition === this.lastImageIndex;
  }

  setCurrentImg(position: number): void {
    this.imgPosition = position;
  }

  onNext(): void {
    if (this.isLastImage) {
      this.imgPosition = this.firstImageIndex;
    } else {
      this.imgPosition++;
    }
    this.setCurrentImg(this.imgPosition);
  }

  onPrev(): void {
    if (this.isFirstImage) {
      this.imgPosition = this.lastImageIndex;
    } else {
      this.imgPosition--;
    }
    this.setCurrentImg(this.imgPosition);
  }

}
