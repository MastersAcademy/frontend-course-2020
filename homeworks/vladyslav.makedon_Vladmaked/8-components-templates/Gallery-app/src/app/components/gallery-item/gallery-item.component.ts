import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Image} from '../../image';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {

  @Input() image!: Image;
  @Input() selectedIndex: number = 0;

  @Output() isLoadedImageEvent = new EventEmitter<boolean>();
  @Output() selectedImageEvent = new EventEmitter<Image>();
  @Output() selectedImageIndexEvent = new EventEmitter<number>();
  isLoadedImage: boolean = false;
  selectedImage?: Image;

  constructor() {
  }

  setImageLoadStatus(): void {
    this.isLoadedImage = true;
    this.isLoadedImageEvent.emit(this.isLoadedImage);
  }

  setSelectedImage(selectedImage: Image, index: number): void {
    this.selectedImage = selectedImage;
    this.selectedImageEvent.emit(this.selectedImage);
    this.selectedImageIndexEvent.emit(index);
  }
}
