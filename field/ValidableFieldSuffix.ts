import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import ValidableField from "./ValidableField";
import Jsonable from "@plastique/core/hash/Jsonable";
import Disableable from "../state/Disableable";

@Reactive(function (this: ValidableFieldSuffix) {
`<div class="input-group" xmlns:v="http://github.com/codeplastique/plastique">
    <field v:component="${this.field}" v:classappend="'Validable-field_with-prefix'"></field>
    <div class="input-group-append">
        <span class="input-group-text" v:text="${this.suffix}" v:classappend="${this.isDisabled()? 'disabled': ''}"></span>
    </div>
</div>
`})
class ValidableFieldSuffix implements Jsonable, Disableable{
    constructor(
        private field: ValidableField,
        private suffix: string
    ) {}

    public toJSON(): Object | Object[] {
        return this.field.toJSON();
    }

    isDisabled(): boolean {
        return this.field.isDisabled();
    }

    setDisabled(isDisabled: boolean): void {
        this.field.setDisabled(isDisabled);
    }
}

export default ValidableFieldSuffix;
interface ValidableFieldSuffix extends Component {}
