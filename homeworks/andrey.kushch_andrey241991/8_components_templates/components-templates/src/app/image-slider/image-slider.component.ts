import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input() currentImg?: Image;
  @Output() onPrev = new EventEmitter<null>();
  @Output() onNext = new EventEmitter<null>();
}
