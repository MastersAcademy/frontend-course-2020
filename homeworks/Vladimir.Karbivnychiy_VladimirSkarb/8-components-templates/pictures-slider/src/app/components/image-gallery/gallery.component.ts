import {Component, OnInit} from '@angular/core';
import {dataImg} from '../../core/data';
import {Image} from '../../interfaces/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  constructor() {
  }

  list: Array<Image> = dataImg;
  fullImage?: Image;
  loader: boolean = true;

  ngOnInit(): void {
    this.fullImage = this.list[0];
  }

  showItem(id: string): void {
    this.loader = true;
    this.fullImage = this.list.find((image: Image) => image.id === id);
  }

  hideLoader(): void {
    this.loader = false;
  }

  showNextEl(): void {
    this.loader = true;
    if (this.fullImage) {
      const index = this.list.indexOf(this.fullImage);
      if (index === this.list.length - 1) {
        this.fullImage = this.list[0];
      } else {
        this.fullImage = this.list[index + 1];
      }
    }
  }

  showPrevEl(): void {
    this.loader = true;
    if (this.fullImage) {
      const index = this.list.indexOf(this.fullImage);
      if (index === 0) {
        this.fullImage = this.list[this.list.length - 1];
      } else {
        this.fullImage = this.list[index - 1];
      }
    }
  }
}
