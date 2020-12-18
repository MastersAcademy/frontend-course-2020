import { Component, OnInit } from '@angular/core';
import { IMAGES} from '../data/data';
import {Img} from '../data/Img';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {
  public selectedImg: Img;
  public images: Img[] = IMAGES;
  isSelect: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(img: Img): void {
    this.selectedImg = img;
    console.log(img.id);
  }

}
