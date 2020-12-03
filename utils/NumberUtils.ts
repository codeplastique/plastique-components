export default class NumberUtils {
    /**
     * @return true if the value contains only positive digits, false otherwise
     */
    public static isDigitable(value: string): boolean {
        if(value.length == 0)
            return false;
        let pattern = /^\d+$/;
        return pattern.test(value.trim());
    }


    /**
     * @return true if the value contains a positive floating point number with a dot delimiter, false otherwise
     */
    public static isFloat(value: string){
        let pattern = /^\d+\.\d+$/;
        return pattern.test(value.trim());
    }

    public static parseNumber(value: number | string): number | null{
        return value == null || (typeof value === 'string' && value.trim().length == 0)? null: +value;
    }
}
