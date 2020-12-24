import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import ValidableField from "./ValidableField";
import Jsonable from "@plastique/core/hash/Jsonable";
import Disableable from "../state/Disableable";
import RequirableValidable from "../state/RequirableValidable";
import Emptyable from "../state/Emptyable";
import Focusable from "../state/Focusable";

@Reactive(function (this: ValidableFieldSuffix<any>) {
`<div class="input-group flex-nowrap" xmlns:v="http://github.com/codeplastique/plastique">
    <field v:component="${this.field}" v:classappend="'Validable-field_with-prefix'"></field>
    <div class="input-group-append">
        <span class="input-group-text" v:text="${this.suffix}" v:classappend="${this.isDisabled()? 'disabled': ''}"></span>
    </div>
</div>
`})
class ValidableFieldSuffix<V extends ValidableField> implements Jsonable, RequirableValidable, Disableable, Emptyable, Focusable{
    constructor(
        public readonly field: V,
        public readonly suffix: string
    ) {}

    public toJSON(): Object | Object[] {
        return this.field.toJSON();
    }

    public isDisabled(): boolean {
        return this.field.isDisabled();
    }

    public setDisabled(isDisabled: boolean): void {
        this.field.setDisabled(isDisabled);
    }

    public isValid(): boolean {
        return this.field.isValid();
    }

    public focus(): void {
        this.field.focus();
    }

    public isEmpty(): boolean {
        return this.field.isEmpty()
    }

    public setRequired(isRequired: boolean): void {
        this.field.setRequired(isRequired);
    }
}

export default ValidableFieldSuffix;
interface ValidableFieldSuffix<V extends ValidableField> extends Component {}
