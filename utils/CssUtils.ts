export default class CssUtils {
    public static getBaseFontSize(): number{
        return  parseInt(getComputedStyle(document.documentElement)['font-size']);
    }
}