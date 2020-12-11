import {Component, OnInit} from '@angular/core';
import {dataImg} from '../../core/data';
import {DataInterface} from '../../interfaces/dataInterface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  constructor() {
  }

  list: Array<DataInterface> = dataImg;
  fullImage?: DataInterface;

  ngOnInit(): void {
    this.fullImage = this.list[0];
  }

  showItem(id: string): void {
    this.fullImage = this.list.find((image: DataInterface) => image.id === id);
  }

  nextEl(): void {
    if (this.fullImage) {
      const index = this.list.indexOf(this.fullImage);
      if (index === this.list.length - 1) {
        this.fullImage = this.list[0];
      } else {
        this.fullImage = this.list[index + 1];
      }
    }
  }

  prevEl(): void {
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
