import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PathService } from '../services/path.service';

@Injectable({ providedIn: 'root'})
export class PathGuard implements CanActivate {

    constructor(private pathService: PathService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.pathService.initJorney(state.url);
        return true;
      }
}
