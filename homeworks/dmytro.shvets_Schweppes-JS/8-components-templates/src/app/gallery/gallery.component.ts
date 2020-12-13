import { Component, OnInit } from '@angular/core';
import { data, Images } from './data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public title = 'Gallery';
  public images: Images[] = data;
  public selctedImage: Images;

  constructor() { }

  ngOnInit(): void {
  }

  selecting(item: Images): void {
    this.selctedImage = item;
  }

}
