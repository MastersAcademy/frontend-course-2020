import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() state!: any;
  newState!: User[];
  sliceCount: number = 0;
  prevBtnDisabled!: boolean;
  nextBtnDisabled!: boolean;

  constructor() {}

  stateToCopy(count: number):User[] {
    return Object.assign([], this.state).splice(count, 2);
  }

  ngOnInit(): void {
     this.newState = this.stateToCopy(this.sliceCount);
     this.isBtnDisabled();
  }

  isBtnDisabled(): void {
    this.prevBtnDisabled = this.sliceCount === 0  || this.newState.length === 0;
    this.nextBtnDisabled = this.sliceCount === 4  || this.newState.length === 0;
  }

  toggleSlide(item: string): void {
    if (item === 'next') {
      this.sliceCount++;
    }
    if (item === 'prev') {
      this.sliceCount--;
    }
    this.newState = this.stateToCopy(this.sliceCount);
    this.isBtnDisabled();
  }
}
