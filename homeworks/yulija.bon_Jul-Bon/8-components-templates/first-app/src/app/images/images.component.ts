import { Component, OnInit } from '@angular/core';
import {Image} from '../images';
import {IMAGES} from "../data-images";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  image: Image = {
    id: 'IMAGE123'
  }

  images: Image[] = IMAGES;

  selectedImage: Image;
  onSelect(image: Image): void {
    this.selectedImage =  image;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
