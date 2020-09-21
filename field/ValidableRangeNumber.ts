import ValidableNumber from "./ValidableNumber";
import Reactive from "@plastique/core/component/Reactive";

@Reactive
export default class ValidableRangeNumber extends ValidableNumber{
    private readonly range: [number, number];
    constructor(value: string | number, range: [number, number], placeholder?: string | number) {
        super(value, placeholder);
        this.range = range;
    }

    protected validate(value: string): boolean {
        if(!super.validate(value))
            return false;

        let [from, till] = this.range;
        return !(value.length > 0 && (+value < from || +value > till));
    }
}