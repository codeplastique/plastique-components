import ValidableField from "./ValidableField";
import Types from "@plastique/core/base/Types";

export default class ValidableText extends ValidableField{
    protected readonly error: string;
    constructor(
        protected validator: (text: string) => Promise<any> | boolean,
        value?: string,
        placeholder?: string,
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
        this.check(value);
        return this.isValueValid;
    }

    // @Lazy(300)
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