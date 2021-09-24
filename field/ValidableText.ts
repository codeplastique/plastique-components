import ValidableField from "./ValidableField";
import Types from "@plastique/core/base/Types";

export default class ValidableText extends ValidableField{
    protected readonly error: string;
    constructor(
        protected validator: (text: string) => Promise<any> | boolean,
        value?: string,
        placeholder?: string,
        errorMessage?: string,
        isRequired?: boolean,
        ignoreInitVerifying?: boolean
    ) {
        super(value, placeholder, isRequired, true);
        this.error = errorMessage;
        if(!ignoreInitVerifying)
            this.verify();
    }

    protected getErrorMessage(): string {
        return this.error;
    }

    public verify(): void{
        super.verify();
    }

    protected validate(value: string): boolean {
        this.check(value);
        return this.isValueValid;
    }

    public setValueValid(isValid: boolean): void{
        this.isValueValid = isValid;
    }

    protected check(value: string): void{
        let result = this.validator(value);
        if(Types.isBoolean(result))
            this.isValueValid = result;
        else
            result.then(
                () => this.isValueValid = true,
                () => this.isValueValid = false
            );
    }
}