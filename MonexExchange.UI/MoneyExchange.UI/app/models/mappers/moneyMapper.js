"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moneyRateVM_1 = require("../moneyRateVM");
var rateVM_1 = require("../rateVM");
var MoneyMapper = /** @class */ (function () {
    function MoneyMapper() {
    }
    MoneyMapper.IMoneyRateTo = function (fromObj) {
        var result = new moneyRateVM_1.MoneyRateVM(fromObj.Base, new Date(fromObj.Date), fromObj.Rates.map(function (item) { return MoneyMapper.IRateTo(item); }));
        return result;
    };
    MoneyMapper.IRateTo = function (fromObj) {
        var result = new rateVM_1.RateVM(fromObj.Base, fromObj.Amount);
        return result;
    };
    return MoneyMapper;
}());
exports.MoneyMapper = MoneyMapper;
//# sourceMappingURL=moneyMapper.js.map