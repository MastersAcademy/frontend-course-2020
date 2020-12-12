import { Component, OnInit, Input } from '@angular/core';
import { dataItems } from '../app.component';

@Component({
  selector: 'app-gallary-item',
  templateUrl: './gallary-item.component.html',
  styleUrls: ['./gallary-item.component.scss']
})

export class GallaryItemComponent implements OnInit {
  @Input() card!: dataItems;
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.card)
  }
}
