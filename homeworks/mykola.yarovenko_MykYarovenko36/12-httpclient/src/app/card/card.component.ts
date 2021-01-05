import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() state!: User[];
  newState!: User[];
  spliceCount: number = 0;
  prevBtnDisabled!: boolean;
  nextBtnDisabled!: boolean;
  stateLength!: number;
  constructor() {}

  stateToCopy(count: number):User[] {
    return Object.assign([], this.state).splice(count, 2);
  }

  ngOnInit(): void {
     this.newState = this.stateToCopy(this.spliceCount);
     this.isBtnDisabled();
  }

  isBtnDisabled(): void {
    this.prevBtnDisabled = this.spliceCount === 0  || this.newState.length === 0;
    this.nextBtnDisabled = this.spliceCount === this.state.length - 2;
  }

  toggleSlide(item: string): void {
    if (item === 'next') {
      this.spliceCount++;
    }
    if (item === 'prev') {
      this.spliceCount--;
    }
    this.newState = this.stateToCopy(this.spliceCount);
    this.isBtnDisabled();
  }
}
