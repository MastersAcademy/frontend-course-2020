import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../models/Image';

@Component({
  selector: 'app-gallary-item',
  templateUrl: './gallary-item.component.html',
  styleUrls: ['./gallary-item.component.scss']
})

export class GallaryItemComponent implements OnInit {
    @Input() card!: Image;
    itemIsLoad: boolean;
    cardId: string;
    constructor () {
        this.itemIsLoad = false;
        this.cardId = '';
    }
  ngOnInit(): void {
      this.itemIsLoad = false;
  }

  isLoad(): void {
      this.cardId = this.card.id;
      this.itemIsLoad = true;
  }
}
