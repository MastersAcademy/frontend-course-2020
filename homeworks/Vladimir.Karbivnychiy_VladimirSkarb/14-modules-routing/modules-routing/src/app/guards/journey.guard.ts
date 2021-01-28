import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JourneyService} from "../services/journey.service";

@Injectable({
  providedIn: 'root'
})
export class JourneyGuard implements CanActivate {
  constructor(private jorneyService: JourneyService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.jorneyService.initJorney(state.url)
    return true;
  }

}
