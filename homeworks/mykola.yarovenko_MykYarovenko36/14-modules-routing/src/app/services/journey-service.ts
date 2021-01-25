import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class JourneyService {
  private currentPathes: string[] = [];
  private journeyPathes = [
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

  public checkPath(url: string): void {
      this.currentPathes.push(url);
      if(this.currentPathes.length === 3) {
          this.showResult();
      }
  }

  private showResult(): void {
    const path = this.currentPathes.join('');
    this.journeyPathes.forEach( item => {
        let result = path === item.journey.join('');
        if (result) {
        console.log(item.message);
        }
    })
    this.currentPathes = [];
  }
}
