import { Component, OnInit } from '@angular/core';
import { dataImages } from '../data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public dataImages = dataImages;
  public numberOfCurrentItem: any;

  onSelect(i: number) {
    this.numberOfCurrentItem = i;
  }

  increaseNumberOfCurrentItem() {
    if (this.numberOfCurrentItem === dataImages.length-1 || this.numberOfCurrentItem === undefined) {
      this.numberOfCurrentItem = 0
    } else {
      this.numberOfCurrentItem++;
    }
  }

  decreaseNumberOfCurrentItem() {
    if (this.numberOfCurrentItem <= 0 || this.numberOfCurrentItem === undefined) {
      this.numberOfCurrentItem = dataImages.length-1;
    } else {
      this.numberOfCurrentItem--;
    }
  }

  checkNumberOfCurrentItem(i: number): boolean {
    return this.numberOfCurrentItem === i;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
