import { Component, OnInit } from '@angular/core';
import { Service } from '../services';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  title = 'Image';

  link: string;

  constructor(private data: Service) { }

  ngOnInit(): void {
    this.data.currentLink.subscribe(link => this.link = link);
  }

}
