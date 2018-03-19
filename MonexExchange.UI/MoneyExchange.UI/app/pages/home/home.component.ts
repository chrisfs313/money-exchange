import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Math } from '../../common/math';
import { EnumMoney } from '../../enums/enumMoney';

import { ConversionVM } from '../../models/conversionVM';
import { MoneyRateVM } from '../../models/moneyRateVM';
import { MoneyBackendService } from '../../services/money-backend.services';
import { LoaderService } from '../../services/loader.services';

// Declaramos las variables para Toastr
declare var toastr: any;

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public conversionVM: ConversionVM;
    public moneyRateVM: MoneyRateVM;
    private _rateIsSwitched: boolean;

    constructor(
        private _moneyBackendService: MoneyBackendService,
        private _loaderService: LoaderService) {

        this._rateIsSwitched = false;

        this.conversionVM = ConversionVM.Empty;
        this.conversionVM.moneyOriginStr = "$0";
        this.conversionVM.moneyTargetStr = "€0";
        this.conversionVM.moneyOriginLabel = EnumMoney.USD;
        this.conversionVM.moneyTargetLabel = EnumMoney.EU;
    }

    ngOnInit() {
        // update the rate once it enters the screen
        setTimeout(this.updateRates, 250, this);
    }

    private updateRates(optional?: HomeComponent): void {
        let instance: HomeComponent = optional === null ? this : optional;

        // service to get the last rate.
        instance._loaderService.showLoader();

        instance._moneyBackendService.getMoneyExchange(EnumMoney.USD, EnumMoney.EU)
            .subscribe(data => {
                instance._loaderService.hideLoader();

                instance.moneyRateVM = data;
            });
    }

    calculate(): void {
        if (this.validate()) {
            let coinSymbol: string = this._rateIsSwitched ? "$" : "€";

            this.conversionVM.moneyTarget = this.conversionVM.moneyOrigin *
                this.moneyRateVM.rates[this._rateIsSwitched ? 1 : 0].amount;
            this.conversionVM.moneyTargetStr = coinSymbol + Math.formatNumber(this.conversionVM.moneyTarget);

        }
    }

    switchConvertion(): void {
        this._rateIsSwitched = !this._rateIsSwitched;

        if (this._rateIsSwitched) {
            this.conversionVM.moneyOriginLabel = EnumMoney.EU;
            this.conversionVM.moneyTargetLabel = EnumMoney.USD;
        }
        else {
            this.conversionVM.moneyOriginLabel = EnumMoney.USD;
            this.conversionVM.moneyTargetLabel = EnumMoney.EU;
        }

        // invalidate binding values
        let coinSymbol_origin: string = !this._rateIsSwitched ? "$" : "€";
        let coinSymbol_target: string = !this._rateIsSwitched ? "€" : "$";
        this.conversionVM.moneyOriginStr = coinSymbol_origin + Math.formatNumber(this.conversionVM.moneyOrigin);
        this.conversionVM.moneyTargetStr = coinSymbol_target + Math.formatNumber(this.conversionVM.moneyTarget);

        // if have values the convert
        if (this.conversionVM.moneyOrigin >= Math.EPSILON) {
            this.calculate();
        }
    }

    private validate(): boolean {
        let isValid: boolean = true;

        if (this.conversionVM.moneyOrigin <= Math.EPSILON) {
            isValid = false;
            toastr.warning('The origin value must be greater than Zero.', 'Validation Error!')
        }

        return isValid;
    }

    validateOnlyNumbers(evt:any):void {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);

        var regex = /[0-9]|\./;

        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    valuechange_origin(evt: any): void {
        let coinSymbol: string = !this._rateIsSwitched ? "$" : "€";

        this.conversionVM.moneyOrigin = parseFloat(this.conversionVM.moneyOriginStr
            .replace("$", "")
            .replace("€", "")
            .replace(",", ""));
        this.conversionVM.moneyOrigin = isNaN(this.conversionVM.moneyOrigin)
            ? 0
            : this.conversionVM.moneyOrigin; 
        this.conversionVM.moneyOriginStr = coinSymbol + Math.formatNumber(this.conversionVM.moneyOrigin);
    }
}
