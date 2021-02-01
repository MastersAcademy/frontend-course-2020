import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {CheckRoutingService} from "../services/check-routing.service";

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {

  constructor(router: Router, private  checkRouting: CheckRoutingService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.checkRouting.createPaths(state.url)
    return true;
  }
}
