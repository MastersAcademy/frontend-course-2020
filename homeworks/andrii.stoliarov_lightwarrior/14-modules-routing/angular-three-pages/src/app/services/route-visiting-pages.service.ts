import { Injectable } from '@angular/core';
import { USERTENDS } from '../data';

@Injectable({providedIn: 'root'})
export class RouteVisitingPagesService {

  private journey: string[] = [];

  setTransition(url: string): void {
    this.journey.push(url);
  }

  checkPath() {
    const lengthJourneyArray: number = this.journey.length;
    const stringJourney: string = this.journey.join('');
    const index: number = USERTENDS.findIndex(
      item => item.journey.slice(0, lengthJourneyArray).join('') === stringJourney
    );

    if (index !== -1) {
      if (USERTENDS[index].journey.length === lengthJourneyArray) {
        console.log(USERTENDS[index].message);
        this.journey = [];
      }
    } else {
      const currentTransition: string = this.journey[lengthJourneyArray - 1];
      this.journey = [];
      this.setTransition(currentTransition);
    }
  }

}


