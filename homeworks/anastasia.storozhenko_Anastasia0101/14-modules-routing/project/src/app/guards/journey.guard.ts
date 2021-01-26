import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { JourneyService} from '../services/journey.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyGuard implements CanActivate {
  constructor(private journeyService: JourneyService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let url = '/' + route.url.map(url => url.path).join('/');
    this.journeyService.saveUrl(url);
    const journey = this.journeyService.compareJourney();
    if(journey) {
      console.log(journey.message);
      this.journeyService.removeUrl();
    }
    return true;
  }
}
