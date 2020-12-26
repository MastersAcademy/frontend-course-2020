import { Component, OnInit } from '@angular/core';
import { Service } from '../services';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  link: string;

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.service.currentLink.subscribe(link => this.link = link);
  }

  previousImage() {
    this.service.previousImage();
  }

  nextImage() {
    this.service.nextImage();
  }

}
