import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserHistoryCheckerService} from "../services/user-history-checker.service";

@Injectable({
  providedIn: 'root'
})
export class UserHistoryGuard implements CanActivate {
  constructor(private userHistoryCheckerService: UserHistoryCheckerService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.userHistoryCheckerService.addUserLink(state.url)
    return true;
  }

}
