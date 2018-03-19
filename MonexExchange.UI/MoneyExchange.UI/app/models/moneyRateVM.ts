import { RateVM, IRate } from './rateVM';

export class MoneyRateVM {
    public get base(): string { return this._base; } 
    public get date(): Date { return this._date; } 
    public get rates(): RateVM[] { return this._rates; } 

    constructor(
        private _base: string,
        private _date: Date,
        private _rates: RateVM[]) { }
}

export class IMoneyRate {
    Base: string;
    Date: string;
    Rates: IRate[];
}

