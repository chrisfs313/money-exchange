"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserVM = /** @class */ (function () {
    function UserVM(email, password) {
        this.email = email;
        this.password = password;
    }
    UserVM.Empty = new UserVM("", "");
    return UserVM;
}());
exports.UserVM = UserVM;
//# sourceMappingURL=userVM.js.map