import { Injectable } from '@angular/core';
import { Router,  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JourneyService } from "../services/journey.service";

@Injectable({
  providedIn: 'root'
})
export class ValidPathGuard implements CanActivate {
  constructor(private journeyService: JourneyService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.journeyService.pathComparison(state.url);
    return true;
  }
}
