import { Component, OnInit } from '@angular/core';
import {IMAGES, Img} from "../constants/data";

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.css']
})
export class ZoomImageComponent implements OnInit {

  public images: Img[] = IMAGES;
  public active: Img | undefined;

  constructor() { }

  onActiveImg(activeImg: Img): any {
    this.active = this.active?.id === activeImg.id ? undefined : activeImg;
  }

  ngOnInit(): void {
  }

}
