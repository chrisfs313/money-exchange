import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserVM } from '../../models/userVM';
import { AuthBackendService } from '../../services/auth-backend.services';
import { LoaderService } from '../../services/loader.services';

// Declaramos las variables para Toastr
declare var toastr: any;

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public userVM: UserVM;

    constructor(
        private _router: Router,
        private _loaderService: LoaderService,
        private _authBackendService: AuthBackendService) {

        this.userVM = UserVM.Empty;
    }

    ngOnInit() {

    }

    public login():void {
        if (this.validate()) {
            this._loaderService.showLoader();

            this._authBackendService.doLogin(this.userVM)
                .subscribe(data => {
                    this._loaderService.hideLoader();

                    if (data) {
                        this._router.navigate(['/home']);
                    }
                    else {
                        toastr.warning('The E-mail and Password dont match.', 'Authentication Failed!');
                    }
                });
        }
        else {
            toastr.warning('Must have data in the fields.', 'Validation Error!');
        }
    }

    private validate(): boolean {
        let isValid: boolean = true;

        if (this.userVM.email.length === 0 && this.userVM.password.length === 0) {
            isValid = false;
        }

        return isValid;
    }
}
