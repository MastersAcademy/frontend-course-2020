import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  journeyPattern = [
    {
      message: 'User tends to home',
      journey: ['/home', '/account', '/home']
    },
    {
      message: 'User tends to account',
      journey: ['/account', '/home', '/account']
    },
    {
      message: 'User loves journeys',
      journey: ['/home', '/account', '/accessories']
    }
  ];

  urlHistory = ['none', 'none', 'none'];

  constructor() { }

  trackingUrl(url: string): void {
    this.urlHistory.push(url);
    this.urlHistory.shift();
    this.detectPattern();
  }

  detectPattern(): void {
    for (const model of this.journeyPattern) {
      if (model.journey.toString() === this.urlHistory.toString()) {
        console.log(model.message);
      }
    }
  }
}
