export class ConversionVM {
    public static readonly Empty:ConversionVM = new ConversionVM("", "", "", 0, 0, "");

    constructor(
        public moneyOriginLabel: string,
        public moneyTargetLabel: string,

        public moneyOriginStr: string,
        public moneyOrigin: number,
        public moneyTarget: number,
        public moneyTargetStr: string) { }
}
