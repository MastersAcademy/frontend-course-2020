import { Component, Input, } from '@angular/core';
import { Image } from 'src/models';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent {
  @Input() currentImage: { index: number, image: Image };
  constructor() { };
}
