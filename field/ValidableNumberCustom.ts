import ValidableNumber from "./ValidableNumber";
import Reactive from "@plastique/core/component/Reactive";

@Reactive
export default class ValidableNumberCustom extends ValidableNumber{
    public error: string;
    
    constructor(
        private validator: (numb: number) => boolean,
        value: number | string = "",
        placeholder: string | number,
        errorMessage?: string,
        isRequired?: boolean
    ) {
        super(value, placeholder, isRequired);
        this.error = errorMessage;
    }

    protected validate(value: string): boolean {
        if(!super.validate(value))
            return false;
        else if(!this.validator(+value)){
            this.errorMessage = this.error
        }else
            return true
    }
}