import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { UserVM } from '../models/userVM';
import { Constants } from '../common/constants';
import { UserClaimService } from './user-claim.services';

// Declaramos las variables para Toastr
declare var toastr: any;

@Injectable()
export class AuthBackendService {

    constructor(
        private _router: Router,
        private _http: HttpClient,
        private _userClaims: UserClaimService) {
   }

    public doLogin(userVM: UserVM): Observable<boolean> {
        let url: string = Constants.WS_BASE_PATH + "/user/doLogin/" +
            userVM.email + "/" + userVM.password;

        var observer = new Observable<boolean>(observer => {
            this._http.post<boolean>(url, null).subscribe(
                data => {
                    if (data) {
                        this._userClaims.isAuthenticated = true;
                        this._userClaims.userName = userVM.email;
                    }

                    observer.next(data);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Something unexpected happened, see log for more details.', 'Service Error!')
                });
        });

        return observer;
    }

    public logout(): void {
        this._userClaims.clear();
        this._router.navigate(['/login']);
    }
}