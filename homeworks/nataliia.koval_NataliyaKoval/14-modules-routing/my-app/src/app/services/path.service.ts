import { Path } from '../interfaces/path.interface';

export class PathService {

  userPath: string[] = [];
  conditionPath: Path[] = [
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

  initJorney(url: string): void {
    this.userPath.push(url);
    const userPathStr = this.userPath.toString();
    for (let i = 0; i < this.conditionPath.length; i++) {
      if (userPathStr.includes(this.conditionPath[i].journey.toString())) {
        console.log(this.conditionPath[i].message);
        this.userPath = [];
      }
    }
  }
}
