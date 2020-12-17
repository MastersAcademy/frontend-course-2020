import {Component} from '@angular/core';
import {Img} from "../data/Img";
import {IMAGES} from "../data/data";

@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.css']
})

export class AllImagesComponent {

  public images: Img[] = IMAGES;
  public active?: Img;
  public loading: boolean = true;

  onActiveImg(activeImg: Img): void {
    if (this.active?.id === activeImg.id){
      this.active = undefined;
    } else {
      this.active = activeImg;
    }
  }

  hideLoader($event : any)  : void {
    this.loading= false;
  }
}
