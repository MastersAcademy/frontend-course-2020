import { Component } from '@angular/core';
import { IMAGES } from '../collection-images';
import { Image } from '../image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  images = IMAGES;
  selectedImage: Image = this.images[0];

  onSelect(image: Image): void {
    this.selectedImage = image;
  }

}
