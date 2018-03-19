"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoneyRateVM = /** @class */ (function () {
    function MoneyRateVM(_base, _date, _rates) {
        this._base = _base;
        this._date = _date;
        this._rates = _rates;
    }
    Object.defineProperty(MoneyRateVM.prototype, "base", {
        get: function () { return this._base; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyRateVM.prototype, "date", {
        get: function () { return this._date; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyRateVM.prototype, "rates", {
        get: function () { return this._rates; },
        enumerable: true,
        configurable: true
    });
    return MoneyRateVM;
}());
exports.MoneyRateVM = MoneyRateVM;
var IMoneyRate = /** @class */ (function () {
    function IMoneyRate() {
    }
    return IMoneyRate;
}());
exports.IMoneyRate = IMoneyRate;
//# sourceMappingURL=moneyRateVM.js.map