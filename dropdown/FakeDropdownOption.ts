import Reactive from "@plastique/core/component/Reactive";
import DropdownOption from "./DropdownOption";

@Reactive
export default class FakeDropdownOption extends DropdownOption<any>{
    constructor(text: string, withState?: boolean) {
        super(void 0, text, withState);
    }

    equals(obj: any): any {
        return obj instanceof FakeDropdownOption && obj.text == this.text
    }
}