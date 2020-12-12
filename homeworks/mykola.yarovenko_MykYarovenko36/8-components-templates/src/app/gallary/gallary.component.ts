import { Component, OnInit } from '@angular/core';
import { dataItems } from '../app.component';
import { data } from '../data';

@Component({
    selector: 'app-gallary',
    templateUrl: './gallary.component.html',
    styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
    cards: dataItems[] = data.map((item): dataItems => {
        return {
          'id': item.id,
          'urls': item.urls,
        };
    });
  currentIndex: number = 0;
  currentSlide!: dataItems;
  isBtnPrevDisabled: boolean = false;
  isBtnNextDisabled: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
    this.currentIndex = 0;
    this.currentSlide = this.cards[this.currentIndex];
    this.isBtnPrevDisabled = true;
  }

  toggleSlide(item: string): void {
      if (item === 'prev') {
          this.currentIndex--;
          this.currentSlide = this.cards[this.currentIndex];
          this.isBtnPrevDisabled = this.currentIndex === 0;
          this.isBtnNextDisabled = this.currentIndex === this.cards.length -1;
      }
      if (item === 'next') {
        this.currentIndex++;
        this.currentSlide = this.cards[this.currentIndex];
        this.isBtnNextDisabled = this.currentIndex === this.cards.length -1;
        this.isBtnPrevDisabled = this.currentIndex === 0;
      }
  }
}
