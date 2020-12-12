import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input() images: any;
  @Output() setCurrentImg = new EventEmitter<number>();
}
