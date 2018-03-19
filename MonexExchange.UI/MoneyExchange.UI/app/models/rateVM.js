"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RateVM = /** @class */ (function () {
    function RateVM(_base, _amount) {
        this._base = _base;
        this._amount = _amount;
    }
    Object.defineProperty(RateVM.prototype, "base", {
        get: function () { return this._base; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RateVM.prototype, "amount", {
        get: function () { return this._amount; },
        enumerable: true,
        configurable: true
    });
    return RateVM;
}());
exports.RateVM = RateVM;
var IRate = /** @class */ (function () {
    function IRate() {
    }
    return IRate;
}());
exports.IRate = IRate;
//# sourceMappingURL=rateVM.js.map