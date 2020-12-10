import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/models';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {
  constructor() {}
  @Input() image: Image;
  @Output() onImageClick: EventEmitter<Image> = new EventEmitter<Image>();
  ngOnInit(): void {
  }

  styleIsTrue() {}

  onClick() {
  this.onImageClick.emit(this.image);
  }

}
