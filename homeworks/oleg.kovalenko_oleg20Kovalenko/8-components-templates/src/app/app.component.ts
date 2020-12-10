
import { Component, OnInit } from '@angular/core';
import { images } from './gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  images = images;
  title = 'Gallery';
  subTitle = 'Image';
  itemAcrive: any;
  load = true;

  clickBox(item: any) {
    this.itemAcrive = item;
  }

  clickActive(item: any) {
    return this.itemAcrive === item;
  }

  loader(): void {
    this.load = false;
  }

  ngOnInit(): void {

  }
}
