"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var userVM_1 = require("../../models/userVM");
var auth_backend_services_1 = require("../../services/auth-backend.services");
var loader_services_1 = require("../../services/loader.services");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _loaderService, _authBackendService) {
        this._router = _router;
        this._loaderService = _loaderService;
        this._authBackendService = _authBackendService;
        this.userVM = userVM_1.UserVM.Empty;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.validate()) {
            this._loaderService.showLoader();
            this._authBackendService.doLogin(this.userVM)
                .subscribe(function (data) {
                _this._loaderService.hideLoader();
                if (data) {
                    _this._router.navigate(['/home']);
                }
                else {
                    toastr.warning('The E-mail and Password dont match.', 'Authentication Failed!');
                }
            });
        }
        else {
            toastr.warning('Must have data in the fields.', 'Validation Error!');
        }
    };
    LoginComponent.prototype.validate = function () {
        var isValid = true;
        if (this.userVM.email.length === 0 && this.userVM.password.length === 0) {
            isValid = false;
        }
        return isValid;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            loader_services_1.LoaderService,
            auth_backend_services_1.AuthBackendService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map