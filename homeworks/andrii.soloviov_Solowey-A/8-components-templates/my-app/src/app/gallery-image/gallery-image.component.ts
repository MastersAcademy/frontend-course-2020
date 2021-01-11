import { Component, Input } from '@angular/core';
import { Image } from '../interfaces/image-interface';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent {
  @Input() currentImage: Image;
  loading: boolean = true

  onLoad() {
    this.loading = false;
  }
}
