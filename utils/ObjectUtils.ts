import Types from "@plastique/core/base/Types";
import {TypeDef} from "@plastique/core/base/Type";

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

    public static getObjectFields<V>(obj: object, type?: TypeDef<V>): Array<V>{
        let fields: Array<V> = [];
        for (let fieldName in this) {
            let field: any = this[fieldName];
            if(type == null || Types.is(field, type))
                fields.push(field)
        }
        return fields;
    }

}