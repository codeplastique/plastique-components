import ValidableNumber from "./ValidableNumber";
import Reactive from "@plastique/core/component/Reactive";

@Reactive
export default class ValidableRangeNumber extends ValidableNumber{
    private readonly range: [number, number];
    constructor(range: [number, number], value?: string | number, placeholder?: string | number, isRequired?: boolean) {
        super(value, placeholder, isRequired);
        this.range = range;
    }

    protected validate(value: string): boolean {
        if(!super.validate(value))
            return false;

        let [from, till] = this.range;
        return !(value.length > 0 && (+value < from || +value > till));
    }
}