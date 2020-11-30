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

    protected validate(value: string): boolean {
        if(value.length > 0 && !NumberUtils.isDigitable(value))
            this.errorMessage = I18n.text('number_incorrect');
        else
            return true
    }

    public toJSON(): Object | Object[] {
        return this.value.length == 0? null: +this.value;
    }
}