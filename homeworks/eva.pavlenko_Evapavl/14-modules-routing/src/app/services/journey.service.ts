import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  private isValidPathNumber: boolean = true;
  path: string | undefined = '';
  arr: string[] = [];
  journeyPath: { message: string, journey: string[] }[] = [
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
  ]

  pathComparison(url: string) {
    if (url) {

      if (this.arr.length <= 2) {
        this.arr.push(url);
      } else {
        this.arr = [];
        this.arr.push(url);
      }

      if (!this.isValidPathNumber) {
        this.arr = [];
        this.arr.push(url);
      }
    }

    this.journeyPath.map((currPath) => {
      const pathArr: string[] = [];

      currPath.journey.map((path) => {
        pathArr.push(path);
      });

      this.isValidPathNumber = !(this.arr[0] === '/accessories' ||
        this.arr[1] === '/accessories' || url === '/');

      if (pathArr.join('') == this.arr.join('')) {
        console.log(currPath.message)
      }
    })
  }

}
