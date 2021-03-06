import Lazy from "@plastique/core/utils/Lazy";
import ValidableText from "./ValidableText";

export default class ValidableTextLazy extends ValidableText{
    constructor(
        validator: (text: string) => Promise<any> | boolean,
        value: string,
        placeholder: string,
        errorMessage?: string,
        isRequired?: boolean,
        ignoreInitVerifying?: boolean
    ) {
        super(validator, value, placeholder, errorMessage, isRequired, ignoreInitVerifying);
    }

    @Lazy(300)
    protected check(value: string): void{
        super.check(value);
    }
}