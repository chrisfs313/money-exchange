import { MoneyRateVM, IMoneyRate } from "../moneyRateVM"
import { RateVM, IRate } from "../rateVM"

export class MoneyMapper {

    public static IMoneyRateTo(fromObj: IMoneyRate): MoneyRateVM {
        let result: MoneyRateVM = new MoneyRateVM(
            fromObj.Base,
            new Date(fromObj.Date),
            fromObj.Rates.map(item => MoneyMapper.IRateTo(item)));

        return result;
    }

    public static IRateTo(fromObj: IRate): RateVM {
        let result: RateVM = new RateVM(
            fromObj.Base,
            fromObj.Amount);

        return result;
    }
}