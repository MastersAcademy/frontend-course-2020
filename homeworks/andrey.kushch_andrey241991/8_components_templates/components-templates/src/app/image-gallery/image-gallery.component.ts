import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input() images: Image[] = [];
  @Input() imgPosition: Number = 0;
  @Output() setCurrentImg = new EventEmitter<number>();
}
