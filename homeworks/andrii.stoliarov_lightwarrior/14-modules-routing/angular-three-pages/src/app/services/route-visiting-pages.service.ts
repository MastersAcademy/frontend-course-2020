import { Injectable } from '@angular/core';
import { USERTENDS } from '../data';

@Injectable({providedIn: 'root'})
export class RouteVisitingPagesService {

  private journey: string[] = [];

  setTransition(url: string): void {
    this.journey.push(url);
  }

  clearJourneyArray() {
    this.journey = [];
  };

  showMassage(index: number): void {
    if (USERTENDS[index].journey.length !== this.journey.length) return;

    console.log(USERTENDS[index].message);
    this.clearJourneyArray();
  }


  checkPath() {
    const lengthJourneyArray: number = this.journey.length;
    const stringJourney: string = this.journey.join('');
    const index: number = USERTENDS.findIndex(
      item => item.journey.slice(0, lengthJourneyArray).join('') === stringJourney
    );

    if (index !== -1) {
      this.showMassage(index);
    } else {
      const currentTransition: string = this.journey[lengthJourneyArray - 1];
      this.clearJourneyArray();
      this.setTransition(currentTransition);
    }
  }

}
