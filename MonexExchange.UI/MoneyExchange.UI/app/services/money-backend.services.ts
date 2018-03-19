import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MoneyMapper } from '../models/mappers/moneyMapper';
import { Constants } from '../common/constants';

import { MoneyRateVM, IMoneyRate } from "../models/moneyRateVM"

// Declaramos las variables para Toastr
declare var toastr: any;

@Injectable()
export class MoneyBackendService {

    constructor(private _http: HttpClient) { }
    
    public getMoneyExchange(base: string, target: string): Observable<MoneyRateVM> {
        let url: string = Constants.WS_BASE_PATH + "/money/getMoneyExchange/" +
            base + "/" + target;

        var observer = new Observable<MoneyRateVM>(observer => {
            this._http.get<IMoneyRate>(url).subscribe(
                data => {
                    observer.next(MoneyMapper.IMoneyRateTo(data));
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Something unexpected happened, see log for more details.', 'Service Error!')
                });
        });
 
        return observer;
    }
}