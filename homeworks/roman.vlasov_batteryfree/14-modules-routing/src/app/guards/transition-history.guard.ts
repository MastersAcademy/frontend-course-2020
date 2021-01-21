import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TransitionHistoryService } from '../services/transition-history.service';

@Injectable({
    providedIn: 'root'
})
export class TransitionHistoryGuard implements CanActivate {
    constructor(private transitionHistory: TransitionHistoryService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.transitionHistory.setTransitionHistory(state.url);
        this.transitionHistory.userTends();

        return true;
    }

}
