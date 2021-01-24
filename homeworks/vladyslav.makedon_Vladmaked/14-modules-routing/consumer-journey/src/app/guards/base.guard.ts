import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';

import {Observable} from 'rxjs';

import {JourneyService} from '../services';

@Injectable({
  providedIn: 'root'
})
export class BaseGuard implements CanActivate {
  constructor(private journeyService: JourneyService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.journeyService.checkJourney(state.url);
    return true;
  }
}
