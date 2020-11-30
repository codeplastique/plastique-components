import ValidableField from "./ValidableField";

export default class ValidableText extends ValidableField{
    private readonly error: string;
    constructor(
        private validator: (text: string) => boolean,
        value?: string,
        placeholder?: string,
        errorMessage?: string,
        isRequired?: boolean
    ) {
        super(value, placeholder, isRequired);
        this.error = errorMessage;
    }

    protected validate(value: string): boolean {
        if(!this.validator(value)){
            this.errorMessage = this.error
        }else
            return true
    }
}