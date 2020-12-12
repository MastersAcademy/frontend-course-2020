import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() imageUrl?: string;
  @Input() imageIndex?: number;
  @Input() imageMaxIndex?: number;
  @Output() sendEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public choosePrev(): void {
    this.sendEvent.emit('prev');
  }

  public chooseNext(): void {
    this.sendEvent.emit('next');
  }
}
