import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TrackingService } from '../services/tracking/tracking.service';

@Injectable({
  providedIn: 'root'
})
export class TrackingGuard implements CanActivate {
  constructor(private trackingService: TrackingService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(123);
      // console.log(state.url);
      this.trackingService.trackingUrl((state.url).toString());
      return true;
  }

}
