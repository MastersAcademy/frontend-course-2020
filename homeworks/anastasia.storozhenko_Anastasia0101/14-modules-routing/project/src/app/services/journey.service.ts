import { Injectable } from '@angular/core';
import { Journey } from '../models/journey.model';
import { journeys } from '../journeys';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  journeys: Journey[];

  getUrls(): string [] {
    const userUrls = localStorage.getItem('urls');
    return userUrls ? JSON.parse(userUrls) : [];
  }

  saveUrl(url) {
    const urls = this.getUrls().concat(url);
    if(urls.length > 3) {
      urls.shift();
    }
    localStorage.setItem('urls', JSON.stringify(urls));
  }

  compareJourney() {
    const urls = this.getUrls().toString();
    return journeys.find(journey => journey.journey.toString() == urls);
  }

  removeUrl() {
    localStorage.removeItem('urls');
  }
}
