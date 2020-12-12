import { Component, } from '@angular/core';
import { Image } from 'src/models';
import  images  from '../assets/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  images: Image[] = images;
  currentImage: {index: number, image: Image};

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
