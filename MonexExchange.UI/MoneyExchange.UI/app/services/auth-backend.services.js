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
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var constants_1 = require("../common/constants");
var user_claim_services_1 = require("./user-claim.services");
var AuthBackendService = /** @class */ (function () {
    function AuthBackendService(_router, _http, _userClaims) {
        this._router = _router;
        this._http = _http;
        this._userClaims = _userClaims;
    }
    AuthBackendService.prototype.doLogin = function (userVM) {
        var _this = this;
        var url = constants_1.Constants.WS_BASE_PATH + "/user/doLogin/" +
            userVM.email + "/" + userVM.password;
        var observer = new Observable_1.Observable(function (observer) {
            _this._http.post(url, null).subscribe(function (data) {
                if (data) {
                    _this._userClaims.isAuthenticated = true;
                    _this._userClaims.userName = userVM.email;
                }
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Something unexpected happened, see log for more details.', 'Service Error!');
            });
        });
        return observer;
    };
    AuthBackendService.prototype.logout = function () {
        this._userClaims.clear();
        this._router.navigate(['/login']);
    };
    AuthBackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            http_1.HttpClient,
            user_claim_services_1.UserClaimService])
    ], AuthBackendService);
    return AuthBackendService;
}());
exports.AuthBackendService = AuthBackendService;
//# sourceMappingURL=auth-backend.services.js.map