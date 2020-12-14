import { Component, Input} from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.css']
})
export class GalleryImageComponent {

  @Input() image!: Image;
  loaded: boolean = true;

  loader(): void {
    this.loaded = false;
  }

}
