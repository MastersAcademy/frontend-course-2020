import {Injectable} from '@angular/core';

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
      console.log(this.paths)
    } else {
      this.resetPaths()
      this.paths.push(url)
    }
    this.comparePaths()
  }

  resetPaths(): void {
    this.paths = []
  }

  comparePaths(): void {

    if (JSON.stringify(this.movingPaths[0]['journey']) === JSON.stringify(this.paths)) {
      console.log(this.movingPaths[0]['message'])
      this.resetPaths()
    }
    if (JSON.stringify(this.movingPaths[1]['journey']) === JSON.stringify(this.paths)) {
      console.log(this.movingPaths[1]['message'])
      this.resetPaths()
    }
    if (JSON.stringify(this.movingPaths[2]['journey']) === JSON.stringify(this.paths)) {
      console.log(this.movingPaths[2]['message'])
      this.resetPaths()
    }
  }

}
