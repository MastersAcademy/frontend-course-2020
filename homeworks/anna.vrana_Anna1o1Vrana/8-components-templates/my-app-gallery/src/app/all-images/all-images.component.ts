import {Component, OnInit} from '@angular/core';
import {IMAGES, Img} from "../constants/data";

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})

export class AllImagesComponent implements OnInit {

  public images: Img[] = IMAGES;
  // public active: Img | undefined;

  constructor() {

  }

  ngOnInit(): void {

  }
}
