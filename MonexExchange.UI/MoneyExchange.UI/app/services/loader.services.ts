import { Injectable } from "@angular/core"

@Injectable()
export class LoaderService {

    public canShowLoader: boolean;

    constructor() {
        this.canShowLoader = false;
    }

    public showLoader(): void {
        this.canShowLoader = true;
    }

    public hideLoader(): void {
        this.canShowLoader = false;
    }
}