import Reactive from "@plastique/core/component/Reactive";
import ValidableField from "./ValidableField";
import I18n from "@plastique/core/utils/I18n";
import NumberUtils from "../utils/NumberUtils";

@Reactive
export default class ValidableNumber extends ValidableField {
    constructor(value?: string | number, placeholder?: string | number, isRequired?: boolean) {
        super(
            value,
            placeholder,
            isRequired
        );
    }

    protected getErrorMessage(): string {
        return I18n.text('number_incorrect');
    }

    protected validate(value: string): boolean {
        return NumberUtils.isDigitable(value)
    }

    public toJSON(): Object | Object[] {
        return this.isEmpty()? null: +this.getValue();
    }
}