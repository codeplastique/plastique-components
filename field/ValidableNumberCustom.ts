import ValidableNumber from "./ValidableNumber";
import Reactive from "@plastique/core/component/Reactive";

@Reactive
export default class ValidableNumberCustom extends ValidableNumber{
    public error: string;
    
    constructor(
        private validator: (numb: number) => boolean,
        value?: number | string,
        placeholder?: string | number,
        errorMessage?: string,
        isRequired?: boolean
    ) {
        super(value, placeholder, isRequired);
        this.error = errorMessage;
        this.verify();
    }

    protected getErrorMessage(): string {
        return this.error;
    }

    protected validate(value: string): boolean {
        if(this.validator === void 0)
            return;
        return super.validate(value) && this.validator(+value);
    }
}