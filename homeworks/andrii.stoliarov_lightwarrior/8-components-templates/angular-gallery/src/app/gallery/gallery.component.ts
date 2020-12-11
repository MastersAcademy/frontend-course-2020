import { Component, OnInit } from '@angular/core';
// import { Image } from '../image';
import { IMAGES } from '../collection-images';
import { Image } from '../image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  // largeImg = 'large image';
  // image: Image = {
  //   urls: 'string',
  //   likes: 18
  // };

  images = IMAGES;
  // selectedImage: Image = this.images[0];
  selectedImage: Image = this.images[0];
  loaded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(image: Image): void {
    this.selectedImage = image;
  }

  loader(): void {
    this.loaded = false;
  }
}
