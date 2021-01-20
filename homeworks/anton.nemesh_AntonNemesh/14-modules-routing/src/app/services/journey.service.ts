import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { IJourneyRules } from "../models";

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  public history: string[] = [];
  public rules = [
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

  constructor(private router: Router) {
  }

  public checkStep(step: string): boolean {
    if (this.history.length >= 3) { this.clearHistory() }
    return (step !== '');
  }

  public saveStep(step: string): void {
    if (this.checkStep(step)) { this.history.push(`/${step}`) }
  }

  public clearHistory(): void {
    this.history = [];
  }

  public showMessage(): void {
    if (this.history[0] === '/accessories' ||
        this.history[1] === '/accessories') {
      this.clearHistory();
    }

    if (this.history.length === 3) {
      this.rules.forEach((item: IJourneyRules) => {
        if (JSON.stringify(this.history) === JSON.stringify(item.journey)) {
          console.log(item.message);
          this.router.navigateByUrl('');
        }
      });
    }

  }
}
