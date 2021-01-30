import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PathService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class PathGuard implements CanActivate {
  constructor(private pathService: PathService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.pathService.checkPath(state.url);
    return true;
  }

}
