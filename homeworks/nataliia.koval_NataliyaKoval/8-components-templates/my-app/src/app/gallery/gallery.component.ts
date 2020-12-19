import { Component, OnInit } from '@angular/core';
import { dataImg } from './data';
import { DataInterface } from './interfaces/dataInterface';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  images: Array<DataInterface> = dataImg;
  selectedImage: any;
  activeImage: any;
  image: any;
  show: boolean = true;
  
  showLargeImage(image: any): void {
    this.selectedImage = image.urls.regular;
    
  }

  addBorder(image: any) {
    this.activeImage = image.urls.thumb;
  }

  hideSpinner() {
    this.show = false;
  }
 
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
