import { Component } from '@angular/core';
import { PICTURES } from '../component/picture/data-pictures';
import { Picture } from '../component/picture/picture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  pictures = PICTURES;
  activePicture: Picture;

  public setActivePicture(data: Picture): void {
    this.activePicture = data;
  }
}
