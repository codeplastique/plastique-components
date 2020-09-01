import ValidableField from "./ValidableField";
import Reactive from "plastique/component/Reactive";

@Reactive
export default class ValidableIp extends ValidableField{
    constructor(value?: string, placeholder?: string | number, isRequired?: boolean) {
        super(value, placeholder, isRequired);
    }

    protected validate(value: string): boolean {
        let pattern = /^(?:\d{1,3}\.){3}\d{1,3}$/;
        return pattern.test(value);
    }

}