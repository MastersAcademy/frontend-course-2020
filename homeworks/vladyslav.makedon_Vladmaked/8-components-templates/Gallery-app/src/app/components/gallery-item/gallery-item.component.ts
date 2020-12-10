import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Images} from '../../images';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {

  @Input() image!: Images;
  @Input() selectedIndex: number = 0;

  @Output() isLoadedImageEvent = new EventEmitter<boolean>();
  @Output() selectedImageEvent = new EventEmitter<Images>();
  @Output() selectedImageIndexEvent = new EventEmitter<number>();
  public isLoadedImage: boolean = false;
  public selectedImage?: Images;

  constructor() {
  }

  ngOnInit(): void {
  }

  public setImageLoadStatus(): void {
    this.isLoadedImage = true;
    this.isLoadedImageEvent.emit(this.isLoadedImage);
  }

  public setSelectedImage(selectedImage: Images, index: number): void {
    this.selectedImage = selectedImage;
    this.selectedImageEvent.emit(this.selectedImage);
    this.selectedImageIndexEvent.emit(index);
  }
}
