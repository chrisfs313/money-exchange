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
var math_1 = require("../../common/math");
var enumMoney_1 = require("../../enums/enumMoney");
var conversionVM_1 = require("../../models/conversionVM");
var money_backend_services_1 = require("../../services/money-backend.services");
var loader_services_1 = require("../../services/loader.services");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_moneyBackendService, _loaderService) {
        this._moneyBackendService = _moneyBackendService;
        this._loaderService = _loaderService;
        this._rateIsSwitched = false;
        this.conversionVM = conversionVM_1.ConversionVM.Empty;
        this.conversionVM.moneyOriginStr = "$0";
        this.conversionVM.moneyTargetStr = "�0";
        this.conversionVM.moneyOriginLabel = enumMoney_1.EnumMoney.USD;
        this.conversionVM.moneyTargetLabel = enumMoney_1.EnumMoney.EU;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // update the rate once it enters the screen
        setTimeout(this.updateRates, 250, this);
    };
    HomeComponent.prototype.updateRates = function (optional) {
        var instance = optional === null ? this : optional;
        // service to get the last rate.
        instance._loaderService.showLoader();
        instance._moneyBackendService.getMoneyExchange(enumMoney_1.EnumMoney.USD, enumMoney_1.EnumMoney.EU)
            .subscribe(function (data) {
            instance._loaderService.hideLoader();
            instance.moneyRateVM = data;
        });
    };
    HomeComponent.prototype.calculate = function () {
        if (this.validate()) {
            var coinSymbol = this._rateIsSwitched ? "$" : "�";
            this.conversionVM.moneyTarget = this.conversionVM.moneyOrigin *
                this.moneyRateVM.rates[this._rateIsSwitched ? 1 : 0].amount;
            this.conversionVM.moneyTargetStr = coinSymbol + math_1.Math.formatNumber(this.conversionVM.moneyTarget);
        }
    };
    HomeComponent.prototype.switchConvertion = function () {
        this._rateIsSwitched = !this._rateIsSwitched;
        if (this._rateIsSwitched) {
            this.conversionVM.moneyOriginLabel = enumMoney_1.EnumMoney.EU;
            this.conversionVM.moneyTargetLabel = enumMoney_1.EnumMoney.USD;
        }
        else {
            this.conversionVM.moneyOriginLabel = enumMoney_1.EnumMoney.USD;
            this.conversionVM.moneyTargetLabel = enumMoney_1.EnumMoney.EU;
        }
        // invalidate binding values
        var coinSymbol_origin = !this._rateIsSwitched ? "$" : "�";
        var coinSymbol_target = !this._rateIsSwitched ? "�" : "$";
        this.conversionVM.moneyOriginStr = coinSymbol_origin + math_1.Math.formatNumber(this.conversionVM.moneyOrigin);
        this.conversionVM.moneyTargetStr = coinSymbol_target + math_1.Math.formatNumber(this.conversionVM.moneyTarget);
        // if have values the convert
        if (this.conversionVM.moneyOrigin >= math_1.Math.EPSILON) {
            this.calculate();
        }
    };
    HomeComponent.prototype.validate = function () {
        var isValid = true;
        if (this.conversionVM.moneyOrigin <= math_1.Math.EPSILON) {
            isValid = false;
            toastr.warning('The origin value must be greater than Zero.', 'Validation Error!');
        }
        return isValid;
    };
    HomeComponent.prototype.validateOnlyNumbers = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    };
    HomeComponent.prototype.valuechange_origin = function (evt) {
        var coinSymbol = !this._rateIsSwitched ? "$" : "�";
        this.conversionVM.moneyOrigin = parseFloat(this.conversionVM.moneyOriginStr
            .replace("$", "")
            .replace("�", "")
            .replace(",", ""));
        this.conversionVM.moneyOrigin = isNaN(this.conversionVM.moneyOrigin)
            ? 0
            : this.conversionVM.moneyOrigin;
        this.conversionVM.moneyOriginStr = coinSymbol + math_1.Math.formatNumber(this.conversionVM.moneyOrigin);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [money_backend_services_1.MoneyBackendService,
            loader_services_1.LoaderService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map