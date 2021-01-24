import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import {TransitionService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {
  constructor(private transitionService: TransitionService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.transitionService.checkTransition(state.url);
    return true;
  }

}
