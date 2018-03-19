import { Injectable } from "@angular/core"

@Injectable()
export class UserClaimService {

    public userName: string;
    public isAuthenticated: boolean;

    constructor() {
        this.userName = "";
        this.isAuthenticated = false;
    }

    public clear(): void {
        this.userName = "";
        this.isAuthenticated = false;
    }
}