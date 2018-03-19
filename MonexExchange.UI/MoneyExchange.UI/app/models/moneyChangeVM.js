"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoneyChangeVM = /** @class */ (function () {
    function MoneyChangeVM(baseCoinName, targetCoinName, coinChange) {
        this._baseCoinName = baseCoinName;
        this._targetCoinName = targetCoinName;
        this._coinChange = coinChange;
    }
    Object.defineProperty(MoneyChangeVM.prototype, "baseCoinName", {
        get: function () { return this._baseCoinName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyChangeVM.prototype, "targetCoinName", {
        get: function () { return this._targetCoinName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyChangeVM.prototype, "coinChange", {
        get: function () { return this._coinChange; },
        enumerable: true,
        configurable: true
    });
    return MoneyChangeVM;
}());
exports.MoneyChangeVM = MoneyChangeVM;
var IMoneyRate = /** @class */ (function () {
    function IMoneyRate() {
    }
    return IMoneyRate;
}());
exports.IMoneyRate = IMoneyRate;
var IRate = /** @class */ (function () {
    function IRate() {
    }
    return IRate;
}());
exports.IRate = IRate;
//# sourceMappingURL=moneyChangeVM.js.map