import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/models';
import  images  from '../assets/data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  images: Image[] = images;
  isImageDownloaded: boolean = false;
  loaderIsTrue: boolean = true;
  currentImage: {index: number, image: Image};

  ngOnInit() {
    setTimeout(() => {
      this.isImageDownloaded = !this.isImageDownloaded;
      this.loaderIsTrue = !this.loaderIsTrue;
    }, 800);
  }

  nextButtonAction() {
    if (this.currentImage.index < 19) {
    const index = ++this.currentImage.index;
    this.currentImage = { index, image: this.images[index] };
    }
  }

  prevButtonAction() {
    if (this.currentImage.index > 0) {
    const index = --this.currentImage.index;
    this.currentImage = { index, image: this.images[index] };
    }
  }

  setCurrentImage(image: {index: number, image: Image}) {
    this.currentImage = image;
  }
}
