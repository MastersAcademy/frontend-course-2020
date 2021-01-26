import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteVisitingPagesService } from '../services';

@Injectable({providedIn: 'root'})
export class TransitionGuard implements CanActivate {

  constructor(private routeVisitingPagesService: RouteVisitingPagesService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.routeVisitingPagesService.setTransition(state.url);
    this.routeVisitingPagesService.checkPath();

    return true;
  }
}
