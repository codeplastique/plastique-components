import Reactive from "plastique/component/Reactive";
import Component from "plastique/component/Component";
import Jsonable from "plastique/hash/Jsonable";
import AppEvent from "plastique/event/AppEvent";
import InitEvent from "plastique/event/InitEvent";
import OnChange from "plastique/component/OnChange";
import Disableable from "../state/Disableable";
import Validable from "../state/Validable";

@Reactive(function (this: Checkbox) {
`<div xmlns:v="http://github.com/codeplastique/plastique" class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" 
        v:classappend="${this.isRequired && !this.value? 'is-invalid': ''}" 
        v:id="${this.hashCode()}" 
        v:disabled="${this.disabled}"
        v:model="${this.value}">
    <label class="custom-control-label" v:for="${this.hashCode()}" v:text="${this.description}"></label>
</div>
`})
class Checkbox implements Jsonable, Validable, Disableable{
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<boolean>
    @OnChange(Checkbox.prototype.notify)
    public value: boolean
    public isRequired: boolean
    public disabled: boolean

    constructor(private description?: string, value?: boolean) {
        this.value = value;
    }
    public toJSON(): Object | Object[] {
        return this.value;
    }

    public isSelected(): boolean{
        return this.value
    }

    protected notify(): void{
        this.fireEventOnParents(Checkbox.CHANGE_EVENT, this.value)
    }

    public setRequired(isRequired: boolean): void{
        this.isRequired = isRequired;
    }

    public isDisabled(): boolean{
        return this.disabled;
    }
    public setDisabled(isDisabled: boolean): void{
        this.disabled = isDisabled;
    }

    public isValid(): boolean {
        return this.isRequired? this.value: true;
    }
}

export default Checkbox;
interface Checkbox extends Component {}