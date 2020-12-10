import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../assets/data';
// import { ImageComponent } from '../gallery/image/image.component';

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
    const itemId: string = (event.target as Element).id;

    // let a = this.images.findIndex(searchIndex, itemId);


    // const WheresTheDev = (obj) => (obj.id === itemId);
    // const a = this.images.findIndex(searchIndex);

    // const item1 = this.images.find(i => i.id === itemId);

    console.log(itemId);
  }
}
