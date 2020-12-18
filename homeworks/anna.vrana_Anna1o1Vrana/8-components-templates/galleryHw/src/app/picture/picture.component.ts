import {Component, Input} from '@angular/core';
import {Img} from '../data/Img';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})

export class PictureComponent {
  @Input() currentImage: any;
  selectedImg: Img;
  loading = true;

  hideLoader($event: any): void {
    this.loading = false;
    console.log('loader');
  }
}
