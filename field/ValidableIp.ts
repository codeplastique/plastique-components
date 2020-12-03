import ValidableField from "./ValidableField";
import Reactive from "@plastique/core/component/Reactive";
import I18n from "@plastique/core/utils/I18n";

@Reactive
export default class ValidableIp extends ValidableField{
    constructor(value?: string, placeholder?: string | number, isRequired?: boolean) {
        super(value, placeholder, isRequired);
    }

    protected getErrorMessage(): string {
        return I18n.text('invalid_ip');
    }

    protected validate(value: string): boolean {
        let pattern = /^(?:\d{1,3}\.){3}\d{1,3}$/;
        return pattern.test(value);
    }
}