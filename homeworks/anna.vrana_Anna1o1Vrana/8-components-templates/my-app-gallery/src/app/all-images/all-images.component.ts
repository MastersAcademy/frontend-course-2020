import {Component, OnInit} from '@angular/core';
import {IMAGES, Img} from "../constants/data";

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})

export class AllImagesComponent implements OnInit {
  ngOnInit(): void {

  }
  public images: Img[] = IMAGES;
  public active: Img | undefined;
  onActiveImg(activeImg: Img): any {
    if (this.active?.id === activeImg.id){
      this.active = undefined;
    } else {
      this.active = activeImg;
    }
  }


}
