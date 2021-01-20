import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHistoryCheckerService {

  private userPathsHistory = [];

  private completedPaths = [
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

  private maxCompletedLinksLength = Math.max(...this.completedPaths.map((link) => link.journey.length));

  constructor() {}

  addUserLink(link: string){
    this.userPathsHistory.push(link);
    if (this.userPathsHistory.length > this.maxCompletedLinksLength) {
      this.userPathsHistory = this.userPathsHistory.slice(this.userPathsHistory.length - this.maxCompletedLinksLength);
    }

    this.checkUserPathsHistory();
  }

  checkUserPathsHistory() :string{
    this.completedPaths.forEach((obj) => {
      if (obj.journey.length > this.userPathsHistory.length) {
        return;
      }

      // 2 object reverse iteration
      for (let i: number = obj.journey.length - 1, k: number = 1; i >= 0; i--, k++) {
        if (obj.journey[i] !== this.userPathsHistory[this.userPathsHistory.length - k]) {
          return;
        }
        console.log(obj.message);
        debugger
        this.userPathsHistory = this.userPathsHistory.slice(-1);
        return;
      }
    });
    return
  }
}
