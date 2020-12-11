import { Component, OnInit, Input, } from '@angular/core';
import { Image } from 'src/models';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {
  @Input() currentImage: { index: number, image: Image };
  constructor() { };
  ngOnInit(): void { };
}
