import {Injectable} from '@angular/core';
import {MovingPathsInterface} from "../models/movingPaths.interface";

@Injectable({
  providedIn: 'root'
})
export class CheckRoutingService {
  paths: Array<string> = [];
  movingPaths = [
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

  createPaths(url: string): void {
    if (url === '' || url === '/') {
      return
    }
    if (this.paths.length < 3) {
      this.paths.push(url)
    } else {
      this.resetPaths()
    }
    this.comparePaths()
  }

  resetPaths(): void {
    this.paths = []
  }

  checkPaths(): void {
    if (this.paths[0] === '/accessories' || this.paths[1] === '/accessories') {
      this.resetPaths();
    }
  }

  comparePaths() {
    this.checkPaths()
    this.movingPaths.forEach((item: MovingPathsInterface) => {
      if (JSON.stringify(this.paths) === JSON.stringify(item.journey)) {
        console.log(item.message)
        this.resetPaths()
      }
    })
  }

}
