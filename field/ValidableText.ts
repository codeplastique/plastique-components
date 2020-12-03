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

    protected getErrorMessage(): string {
        return this.error;
    }

    protected validate(value: string): boolean {
        return this.validator(value);
    }
}