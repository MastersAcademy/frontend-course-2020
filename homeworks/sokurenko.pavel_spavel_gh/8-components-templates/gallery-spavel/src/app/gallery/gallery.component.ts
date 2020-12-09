import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../assets/data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = IMAGES;

  constructor() {}

  ngOnInit(): void {}

  selectImageId(event: Event): void {
    console.log((event.target as Element).id);
  }
}
