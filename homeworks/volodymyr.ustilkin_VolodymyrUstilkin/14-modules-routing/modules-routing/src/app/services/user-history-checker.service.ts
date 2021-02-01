import {Injectable} from '@angular/core';

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

  addUserLink(link: string) {
    this.userPathsHistory.push(link);
    this.checkUserPathsHistory();
  }

  checkUserPathsHistory() {
    let partialEquals: boolean = false;

    this.completedPaths.forEach((obj) => {
      for (let i: number = 0; i < this.userPathsHistory.length; i++) {

        if (obj.journey[i] !== this.userPathsHistory[i]) {
          return;
        }

        if (i === this.userPathsHistory.length - 1) {
          partialEquals = true;
        }

        if (i === obj.journey.length - 1) {
          console.log(obj.message);
          this.userPathsHistory = this.userPathsHistory.slice(-1);
          return;
        }
      }
    });

    if (!partialEquals) {
      this.userPathsHistory = this.userPathsHistory.slice(-1);
    }
  }
}
