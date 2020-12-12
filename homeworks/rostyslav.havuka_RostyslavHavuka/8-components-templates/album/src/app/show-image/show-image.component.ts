import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from 'src/models';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})

export class ShowImageComponent {
  @Input() index: number;
  @Input() image: Image;
  @Input() currentImage: { image: Image };
  @Output() onImageClick: EventEmitter<{
    index: number;
    image: Image;
  }> = new EventEmitter<{ index: number; image: Image }>();
  loader: boolean = true;

  constructor() { };

  imageDownloaded() {
    this.loader = false
  }

  onClick(image: Image) {
    this.onImageClick.emit({ index: this.index, image });
  }

}
