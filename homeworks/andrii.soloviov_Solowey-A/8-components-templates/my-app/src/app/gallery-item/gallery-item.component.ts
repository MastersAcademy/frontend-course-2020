import {Component, Output, EventEmitter} from '@angular/core';
import {IMAGES} from "../source/data-images";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {

  @Output() onClick = new EventEmitter<string>()
  images = IMAGES;
  selectedItem:string = '';

  select( event, id, idValue ) {
    this.selectedItem = idValue;
    this.onClick.emit(id)
  }
}
