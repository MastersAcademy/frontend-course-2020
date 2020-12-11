import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/models';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent implements OnInit {
  @Input() index: number;
  @Input() image: Image;
  @Input() currentImage: { index: number; image: Image };
  @Output() onImageClick: EventEmitter<{
    index: number;
    image: Image;
  }> = new EventEmitter<{ index: number; image: Image }>();

  constructor() { };

  ngOnInit(): void { };

  isBlur(event: FocusEvent) {
    event.stopImmediatePropagation();
  }

  onClick(image: Image) {
    this.onImageClick.emit({ index: this.index, image });
  }

}
