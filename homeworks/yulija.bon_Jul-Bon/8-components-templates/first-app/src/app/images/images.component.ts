import { Component, OnInit } from '@angular/core';
import {Image} from '../images';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public images: any;
  public loading: boolean = true;
  public selectedImage: Image | undefined;
  public onSelect(image: Image): void {
    this.selectedImage = image;
  }

  constructor(private galleryService: GalleryService) {}

  getImagesData(): void {
    this.galleryService.getImages()
      .subscribe(images => this.images = images);
  }

  ngOnInit(): void {
    this.getImagesData();
    console.log(this.loading);
  }

  onLoad():void {
    this.loading= false;
     console.log(this.loading);
  }
}
