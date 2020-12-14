import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {IMAGES} from "../source/gallery.service";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Output() onClick = new EventEmitter<any>()
  images = IMAGES;
  selectedItem:string = '';

  ngOnInit(): void {
  }

  select( event, id, idValue) {
    this.selectedItem = idValue;
    this.onClick.emit(id)
  }
}
