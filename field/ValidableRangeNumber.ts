import ValidableNumber from "./ValidableNumber";
import Reactive from "@plastique/core/component/Reactive";
import I18n from "@plastique/core/utils/I18n";

@Reactive
export default class ValidableRangeNumber extends ValidableNumber{
    private readonly range: [number, number];
    constructor(range: [number, number], value?: string | number, placeholder?: string | number, isRequired?: boolean) {
        super(value, placeholder, isRequired);
        this.range = range;
    }

    protected getErrorMessage(): string {
        return I18n.text('number_range_incorrect');
    }

    protected validate(value: string): boolean {
        let [from, till] = this.range;
        return super.validate(value) && +value >= from && +value <= till;
    }
}