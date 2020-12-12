import { Component, Input } from '@angular/core';

import { Image } from '../models/image';
import { DataService } from "../data.service";
import { IMAGES } from "../mocks/data";

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css']
})
export class FullImageComponent {

  images: Image[] = IMAGES;

  @Input() index: number | undefined;

  constructor(private dataService: DataService) {}

  getImages(): void {
    this.images = this.dataService.images;
  }

}
