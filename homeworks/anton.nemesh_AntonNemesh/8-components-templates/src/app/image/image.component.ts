import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() currentImage: any;
  public isLoaded: boolean = true;

  imageUploaded(): void {
    this.isLoaded = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
