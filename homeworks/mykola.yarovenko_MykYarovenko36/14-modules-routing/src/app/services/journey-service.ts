import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class JourneyService {
  private currentPaths: string[] = [];
  private journeyPaths = [
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
      }
  ];

  private clearPaths = (): void => {
    this.currentPaths = [];
  };

  private initLastPath = (): void => {
     this.currentPaths = [`${this.currentPaths.pop()}`];
  }

  public checkPath = (url: string): void => {
    if (this.currentPaths.length < 3 && url !== '/') this.currentPaths.push(url);
    if (this.currentPaths.length === 3) {
        const path = this.currentPaths.join('');
        this.journeyPaths.forEach((item) => {
            item.journey.join('').includes(path)? (
                this.showResult(item.message), this.clearPaths()
                ) : this.initLastPath();
        });
    }
  }

  private showResult = (message: string): void => {
    console.log(message);
  }
}
