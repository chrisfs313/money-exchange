"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConversionVM = /** @class */ (function () {
    function ConversionVM(moneyOriginLabel, moneyTargetLabel, moneyOriginStr, moneyOrigin, moneyTarget, moneyTargetStr) {
        this.moneyOriginLabel = moneyOriginLabel;
        this.moneyTargetLabel = moneyTargetLabel;
        this.moneyOriginStr = moneyOriginStr;
        this.moneyOrigin = moneyOrigin;
        this.moneyTarget = moneyTarget;
        this.moneyTargetStr = moneyTargetStr;
    }
    ConversionVM.Empty = new ConversionVM("", "", "", 0, 0, "");
    return ConversionVM;
}());
exports.ConversionVM = ConversionVM;
//# sourceMappingURL=conversionVM.js.map