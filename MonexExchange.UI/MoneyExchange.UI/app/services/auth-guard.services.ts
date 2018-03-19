import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserClaimService } from './user-claim.services';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private _router: Router,
        private _userClaims: UserClaimService) {
    }

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this._userClaims.isAuthenticated) {
            return true;
        } else {
            // state.url, has the url
            this._router.navigate(['login']);
            return false;
        }
    }
}