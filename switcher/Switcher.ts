import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import Jsonable from "@plastique/core/hash/Jsonable";
import TemplateIterator from "@plastique/core/utils/TemplateIterator";
import InitEvent from "@plastique/core/event/InitEvent";
import AppEvent from "@plastique/core/event/AppEvent";
import MapEntry from "@plastique/core/collection/map/MapEntry";
import ReactiveReadonlyMap from "@plastique/core/collection/map/ReactiveReadonlyMap";
import OnChange from "@plastique/core/component/OnChange";
import Validable from "../state/Validable";
import Disableable from "../state/Disableable";

/**
 * group of the radio buttons
 */
@Reactive(function (this: Switcher) {
let entry: MapEntry<string, any>;
let iter: TemplateIterator
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Switcher">
    <div class="custom-control custom-radio Switcher__radio" v:each="entry, iter: ${this.nameToValue}">
        <input class="custom-control-input" 
                type="radio" 
                v:classappend="${!this.isValid()? 'is-invalid': ''}" 
                v:disabled="${this.disabled}"
                v:value="${entry.value}" 
                v:model="${this.value}" 
                v:id="${this.hashCode() +'_'+ iter.index}">
        <label class="custom-control-label" v:text="${entry.key}" v:for="${this.hashCode() +'_'+ iter.index}"></label>
    </div>
</div>
`})
class Switcher implements Jsonable, Validable, Disableable{
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<boolean>
    @OnChange(Switcher.prototype.notify)
    protected value: any;
    protected disabled: boolean
    public isRequired: boolean

    constructor(private readonly nameToValue: ReactiveReadonlyMap<string, any>,
                value?: any
    ) {
        this.value = value;
    }

    private notify(): void{
        this.fireEventOnParents(Switcher.CHANGE_EVENT, this.value)
    }

    public setValue(value: any): void{
        if(this.value !== value){
            if(this.isComponentAttached()){
                //set empty parent for the fireEventOnParents ignoring
                this.runWithFakeParents(() => this.value = value, null)
            }else {
                this.value = value;
            }
        }
    }

    public getValue(): string{
        return this.value;
    }

    public toJSON(): Object | Object[] {
        return this.value;
    }

    public setRequired(isRequired: boolean): void{
        this.isRequired = isRequired;
    }

    public setDisabled(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public isDisabled(): boolean {
        return this.disabled;
    }

    public isValid(): boolean {
        return this.isRequired? this.isSelected(): true;
    }

    public isSelected(): boolean{
        return this.nameToValue.values().includes(this.value)
    }
}

interface Switcher extends Component {}
export default Switcher;