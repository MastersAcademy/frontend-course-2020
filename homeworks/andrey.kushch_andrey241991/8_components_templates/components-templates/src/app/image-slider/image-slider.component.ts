import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input() currentImg: any;
  @Output() onPrev = new EventEmitter();
  @Output() onNext = new EventEmitter();
}
