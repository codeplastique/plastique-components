declare const Vue: any

export default class ObjectUtils {
    public static cloneTo<T>(obj: T, to: T = {} as any): T{
        let result: any = to;
        for(let prop in obj) {
            if(obj.hasOwnProperty(prop)){
                if(obj[prop] != null && typeof obj[prop] === 'object' && !Array.isArray(obj[prop]))
                    Vue.set(result[prop], ObjectUtils.cloneTo(obj[prop]));
                else
                    result[prop] = obj[prop]
            }
        }
        return result;
    }

    public static clone<T>(obj: T): T{
        return  JSON.parse(JSON.stringify(obj));
    }

    public static isEquals(a: object, b: object): boolean {
        return JSON.stringify(a) == JSON.stringify(b)
    }

}