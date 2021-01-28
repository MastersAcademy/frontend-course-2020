import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LoggingService } from '../services/logging.service';

@Injectable({
  providedIn: 'root'
})
export class UserTravelGuard implements CanActivate {

  constructor(private loggingService: LoggingService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.routeConfig.path === '**') {
      this.loggingService.refreshingUserRoute();
    }
    this.loggingService.loggingUserActions(state.url);
    return true;
  }

}
