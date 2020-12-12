import {Component, Directive, OnInit} from '@angular/core';
import {GalleryService} from "../source/gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  constructor(public galleryService: GalleryService) {}
  ngOnInit(): void {
  }
  currentItemIndex:number = 0;
  currentItem = '';
  selectedItem:string = '';

  select(event, id: string, idValue) {
    this.currentItem = id;
    this.selectedItem = idValue;
  }
  loading: boolean = true
  onLoad() {
    this.loading = false;
  }
}
