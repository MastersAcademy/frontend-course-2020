import { Component } from '@angular/core';
import { images } from "../data";

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
export class GalleryContainerComponent {
  images = images;
  imgPosition = 0;
  currentImg = images[0]

  setCurrentImg(imgPosition: number) {
    this.currentImg = images[imgPosition]
  }

  onNext() {
    if (this.imgPosition === images.length - 1) {
      this.imgPosition = 0;
    } else {
      this.imgPosition++;
    }
    this.setCurrentImg(this.imgPosition);
  }

  onPrev() {
    if (this.imgPosition === 0) {
      this.imgPosition = images.length - 1;
    } else {
      this.imgPosition--;
    }
    this.setCurrentImg(this.imgPosition);
  }
}
