import { Component } from '@angular/core';

import { LoaderService } from './services/loader.services';
import { UserClaimService } from './services/user-claim.services';
import { AuthBackendService } from './services/auth-backend.services';

@Component({
    selector: 'main-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    constructor(
        private _authBackendService: AuthBackendService,
        public userClaimsService: UserClaimService,
        public loaderService: LoaderService) { }

    public logout(): void {
        this._authBackendService.logout();
    }
}
