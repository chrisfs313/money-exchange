"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Math = /** @class */ (function () {
    function Math() {
    }
    Math.formatNumber = function (value) {
        return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
    };
    Math.EPSILON = 0.0001;
    return Math;
}());
exports.Math = Math;
//# sourceMappingURL=math.js.map