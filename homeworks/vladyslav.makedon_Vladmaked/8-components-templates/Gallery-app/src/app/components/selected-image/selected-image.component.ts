import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Image, IMAGES} from '../../image';

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.css']
})
export class SelectedImageComponent {
  images: Image[] = IMAGES;
  @Input() imageSelectedIndex: number = 0;
  @Input() selectedImage?: Image;
  @Output() selectedImageEvent = new EventEmitter<Image>();

  constructor() {
  }

  setPrevImage(): void {
    this.imageSelectedIndex--;
    this.selectedImage = this.images.find((item, index) => index === this.imageSelectedIndex);
    this.selectedImageEvent.emit(this.selectedImage);
  }

  setNextImage(): void {
    this.imageSelectedIndex++;
    this.selectedImage = this.images.find((item, index) => index === this.imageSelectedIndex);
    this.selectedImageEvent.emit(this.selectedImage);
  }

  getIsFirstImage(): boolean {
    return this.selectedImage === this.images[0];
  }

  getIsLastImage(): boolean {
    return this.selectedImage === this.images[this.images.length - 1];
  }

}
