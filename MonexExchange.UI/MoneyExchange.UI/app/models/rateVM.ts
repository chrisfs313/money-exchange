export class RateVM {

    public get base(): string { return this._base; }
    public get amount(): number { return this._amount; }

    constructor(
        private _base: string,
        private _amount: number) { }
}

export class IRate {
    Base: string;
    Amount: number;
}