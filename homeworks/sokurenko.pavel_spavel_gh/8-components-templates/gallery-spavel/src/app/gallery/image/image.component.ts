import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../../assets/data';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  images = IMAGES;
  imageUrl: string;

  constructor() {
    this.imageUrl = this.images[0].urls.small;
    this.setNewImageUrl(this.images[1].urls.small);
  }

  ngOnInit(): void {
  }

  public setNewImageUrl(newUrl: string): void {
    // const item1 = this.images.find(i => i.id === itemId);
    this.imageUrl = newUrl;
  }
}
