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
  currentImage: Image;

  ngOnInit() {
    setTimeout(() => {
      this.isImageDownloaded = !this.isImageDownloaded
      this.loaderIsTrue = !this.loaderIsTrue;
    }, 2000);
  }

  setCurrentImage(image: Image) {
    this.currentImage = image
  }
}
