import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TrackForURLService } from '../track/track-for-url.service';

@Injectable({
  providedIn: 'root'
})
export class TravelingGuard implements CanActivate {

  constructor(private _track: TrackForURLService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!!route.url[0].path) {
      this._track.compare(route.url[0].path);
    }

    return true;
  }

}
