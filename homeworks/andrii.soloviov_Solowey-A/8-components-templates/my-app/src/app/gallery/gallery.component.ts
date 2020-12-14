import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  currentItem = '';
  selectedItem:string = '';

  ngOnInit(): void {
  }

  onClick(id) {
    this.currentItem = id;
  }
}
