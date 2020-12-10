import {Component, OnInit} from '@angular/core';
import {images} from "./image-list";
// import {BrowserModule} from '@angular/platform-browser';
import {PreviewImageComponent} from "./preview-image/preview-image.component";

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.css']
})
export class GalleryImagesComponent implements OnInit {
  images: PreviewImageComponent[];
  mainImage: PreviewImageComponent;

  componentImgCompleteLoad(id:number){
    console.log('loaded: ' + id);
  }

  constructor() {
  }

  setNewActiveImage(id: number) {
    this.images.forEach((e) => {
      e.isSelected = e.id === id;
    });
    this.mainImage = this.images[id];

  }

  ngOnInit(): void {
    this.loadImageUrls();
    this.images[0].isSelected = true;
    this.mainImage = this.images[0];
  }

  loadImageUrls() {
    this.images =images.map((elem, index) => {
      const img = new PreviewImageComponent();
      img.id = index;
      img.smallUrl = elem.urls.small;
      img.fullUrl = elem.urls.full;
      return img;
    });
  }
}
