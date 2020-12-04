import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import Jsonable from "@plastique/core/hash/Jsonable";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import OnChange from "@plastique/core/component/OnChange";
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
    @OnChange(Checkbox.prototype.onChange)
    protected value: boolean
    public isRequired: boolean
    protected disabled: boolean

    constructor(private description?: string, value?: boolean) {
        this.value = value;
    }
    public toJSON(): Object | Object[] {
        return this.value;
    }

    public isSelected(): boolean{
        return this.value
    }

    protected onChange(): void{
        if(this.isComponentAttached())
            this.fireEventOnParents(Checkbox.CHANGE_EVENT, this.value)
    }

    public setRequired(isRequired: boolean): void{
        this.isRequired = isRequired;
    }

    public toggleValue(): void{
        this.setValue(!this.value)
    }

    public setValue(value: boolean): void{
        this.runWithFakeParents(
            () => this.value = value,
            null
        );
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
