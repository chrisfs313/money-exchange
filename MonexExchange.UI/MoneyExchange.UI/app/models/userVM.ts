export class UserVM {
    public static readonly Empty: UserVM = new UserVM("", "");

    constructor(
        public email: string,
        public password: string) {

    }
}