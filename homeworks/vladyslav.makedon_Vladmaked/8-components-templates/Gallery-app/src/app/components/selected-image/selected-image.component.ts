import {Component, Input, OnInit} from '@angular/core';
import {IMAGES, Images} from '../../images';

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.css']
})
export class SelectedImageComponent implements OnInit {
  public images: Images[] = IMAGES;
  @Input() imageSelectedIndex: number = 0;
  @Input() selectedImage?: Images;

  constructor() {
  }

  ngOnInit(): void {
  }


  public setPrevImage(): void {
    this.imageSelectedIndex--;
    this.selectedImage = this.images.find((item, index) => index === this.imageSelectedIndex);
  }

  public setNextImage(): void {
    this.imageSelectedIndex++;
    this.selectedImage = this.images.find((item, index) => index === this.imageSelectedIndex);
  }

}
