import { Component, OnInit } from '@angular/core';
import { images } from './gallery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { 
  images: Image[] = images;
  title = 'Gallery';
  subTitle = 'Image';
  itemAcrive: any;
  load: boolean = true;

  clickBox(item: Image) {
    this.itemAcrive = item;
  }

  clickActive(item: Image) {
    return this.itemAcrive === item;
  }

  loader(): void {
    this.load = false;
  }

  ngOnInit(): void {}
}

interface Image {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
}
