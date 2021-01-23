// import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  journey = [];

  userJourneys = [
    {
      message: 'User tends to home',
      journey: ['/home', '/account', '/home'],
    },
    {
      message: 'User tends to account',
      journey: ['/account', '/home', '/account'],
    },
    {
      message: 'User loves journeys',
      journey: ['/home', '/account', '/accessories'],
    },
  ];

  constructor() {}

  userMessage(): void {
    const filtered = this.userJourneys.filter((e) => {
      const journeyLength = e.journey.slice(0, this.journey.length);
      return JSON.stringify(journeyLength) == JSON.stringify(this.journey);
    });

    if (filtered.length) {
      if (filtered[0].journey.length == this.journey.length) {
        console.log(filtered[0].message);
        this.journey = [];
      }
    } else {
      this.journey = [];
    }
  }

  journeyUrl(url) {
    this.journey.push(url);
    this.userMessage();
  }
}
