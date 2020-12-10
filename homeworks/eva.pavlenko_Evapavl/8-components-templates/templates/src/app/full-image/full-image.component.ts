import { Component, Input, OnInit } from '@angular/core';

import { Image } from '../image';
import { DataService } from "../data.service";
import { IMAGES } from "../data";

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css']
})
export class FullImageComponent implements OnInit {

  images: Image[] | [] = IMAGES;

  @Input() index: any;

  constructor(private dataService: DataService) {}

  getImages(): void {
    this.images = this.dataService.images;
  }

  ngOnInit(): void {
  }
}
