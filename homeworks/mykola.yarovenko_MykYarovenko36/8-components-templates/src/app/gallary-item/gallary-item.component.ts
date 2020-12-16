import { Component, OnInit, Input } from '@angular/core';
import { dataImage } from '../models/dataImage';

@Component({
  selector: 'app-gallary-item',
  templateUrl: './gallary-item.component.html',
  styleUrls: ['./gallary-item.component.scss']
})

export class GallaryItemComponent implements OnInit {
    @Input() card!: dataImage;
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
