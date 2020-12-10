import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Image } from '../image';
import { IMAGES } from "../data";

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  images: Image[] | [] = IMAGES;
  selectedImage: void | Image | undefined;
  index: any;
  disabledDec: boolean | undefined = false;
  disabledInc: boolean | undefined = false;


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.dataService.getImages()
      .subscribe(data => {
        this.images = data
      })
  }

  onSelect(image: Image, index: number) {
    if (image) {
      this.selectedImage = image;
      this.index = index;
      if(index === 0 ) this.disabledDec = true;
      if( index === this.images.length - 1) this.disabledInc = true;
      if(this.index > 0 && this.index < this.images.length - 1){
        this.disabledDec = false;
        this.disabledInc = false;
      }
    }
  }

  dec() {
    if (this.selectedImage) {
      if (this.selectedImage.id === this.images[this.index].id) {
        this.index--;
        this.selectedImage = this.images[this.index]
        this.disabledInc = false;
      }
      if(this.index === 0) this.disabledDec = true;
      if( this.index === this.images.length - 1) this.disabledInc = true;
    }
  }

  inc() {
    if (this.selectedImage) {
      if (this.selectedImage.id === this.images[this.index].id &&  this.index < this.images.length - 1) {
        this.index++;
        this.selectedImage = this.images[this.index]
        this.disabledDec = false;
      }
      if( this.index === this.images.length - 1) this.disabledInc = true;
    }
  }

}


