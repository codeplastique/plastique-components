export default class NumberUtils {
    public static isDigitable(value: string): boolean {
        let pattern = /^[0-9]+$/;
        return pattern.test(value.trim());
    }

    public static parseNumber(value: number | string): number | null{
        return value == null || (typeof value === 'string' && value.trim().length == 0)? null: +value;
    }
}
