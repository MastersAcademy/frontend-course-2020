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

  // private getImages(): void {
  //   this.images = this.galleryService.getImages();
  // }

  getImagesData(): void {
    this.galleryService.getImages()
      .subscribe(images => this.images = images);
  }


  //images = [];
  // ngOnInit() {
  //   this.isLoading = false;
  //   this.galleryService.getImages().subscribe(res => {
  //     this.images = res;
  //     this.isLoading = false;
  //     console.log('39', this.isLoading);
  //   });
  // }

  ngOnInit(): void {
    this.getImagesData();
    console.log(this.loading);
  }

  onLoad():void {
    this.loading= false;
     console.log(this.loading);
  }
}
