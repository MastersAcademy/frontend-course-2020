import {Injectable} from '@angular/core';

import {Journey} from '../models';
import {JOURNEYS} from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  journey: string[] = [];
  journeys: Journey[] = JOURNEYS;

  constructor() {
  }

  checkJourney(url: string): void {
    this.journey.push(url);
    let resultOfChecking: boolean;
    resultOfChecking = this.journeys.some((journeysItem) => {
      if (JSON.stringify(journeysItem.journey.slice(0, this.journey.length)) === JSON.stringify(this.journey)) {
        if (this.journey.length === journeysItem.journey.length) {
          console.log(journeysItem.message);
          this.journey = [];
        }
        return true;
      }
      return false;
    });
    if (!resultOfChecking) {
      this.journey = [];
    }
  }
}
