export class Math {

    public static readonly EPSILON: number = 0.0001;

    public static formatNumber(value: number): string {
        return value.toLocaleString(undefined, { maximumFractionDigits: 2 }) 
    }
}