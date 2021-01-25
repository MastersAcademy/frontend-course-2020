import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { correctPathService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class CorrectPathGuard implements CanActivate {

  constructor(private correctPath: correctPathService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.correctPath.findPath(state.url);
    return true;
  }
}
