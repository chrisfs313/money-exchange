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
var moneyMapper_1 = require("../models/mappers/moneyMapper");
var constants_1 = require("../common/constants");
var MoneyBackendService = /** @class */ (function () {
    function MoneyBackendService(_http) {
        this._http = _http;
    }
    MoneyBackendService.prototype.getMoneyExchange = function (base, target) {
        var _this = this;
        var url = constants_1.Constants.WS_BASE_PATH + "/money/getMoneyExchange/" +
            base + "/" + target;
        var observer = new Observable_1.Observable(function (observer) {
            _this._http.get(url).subscribe(function (data) {
                observer.next(moneyMapper_1.MoneyMapper.IMoneyRateTo(data));
                observer.complete();
            }, function (err) {
                console.error("Error", err);
                toastr.error('Something unexpected happened, see log for more details.', 'Service Error!');
            });
        });
        return observer;
    };
    MoneyBackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MoneyBackendService);
    return MoneyBackendService;
}());
exports.MoneyBackendService = MoneyBackendService;
//# sourceMappingURL=money-backend.services.js.map