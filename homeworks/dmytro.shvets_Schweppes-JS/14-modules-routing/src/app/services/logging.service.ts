import { Injectable } from '@angular/core';

import { movements } from '../mocks/movements.mock';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private userRoute: string[] = [];

  refreshingUserRoute(): void {
    this.userRoute = [];
  }

  loggingUserActions(url: string): void {
    this.userRoute.push(url)
    this.informDirection()
  }

  informDirection(): void {
    const userRouteStr = this.userRoute.toString();
    for (let i = 0; i < movements.length; i++) {
      if (userRouteStr.includes(movements[i].journey.toString())) {
        console.log(movements[i].message);
        this.userRoute = [];
      }
    }
  }

  constructor() { }
}
