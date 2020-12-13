import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data, Images } from './gallery/data';

@Injectable({
  providedIn: 'root'
})
export class Service {

  public index: number = 0;

  public imageLink = new BehaviorSubject<string>(data[this.index].urls.regular);
  currentLink = this.imageLink.asObservable();

  public currentImage = new BehaviorSubject<Images>(data[this.index]);
  selectedImage = this.currentImage.asObservable();

  constructor() {}

  changingLink(i: number) {
    this.index = i;
    this.imageLink.next(data[this.index].urls.regular);
  }

  nextImage() {
    if (this.index < data.length - 1) {
      this.index++;
    } else this.index = 0;
    this.imageLink.next(data[this.index].urls.regular);
    this.currentImage.next(data[this.index]);
  }

  previousImage() {
    if (this.index > 0) {
      this.index--;
    } else this.index = data.length - 1;
    this.imageLink.next(data[this.index].urls.regular);
    this.currentImage.next(data[this.index]);
  }
}
