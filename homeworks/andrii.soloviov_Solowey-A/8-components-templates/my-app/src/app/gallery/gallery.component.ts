import {Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
  currentItem = '';
  selectedItem:string = '';

  onClick(id:string) {
    this.currentItem = id;
  }
}
