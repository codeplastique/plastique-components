import Reactive from "plastique/component/Reactive";
import Component from "plastique/component/Component";
import Jsonable from "plastique/hash/Jsonable";
import ReactiveMap, {MapEntry} from "plastique/collection/ReactiveMap";
import TemplateIterator from "plastique/utils/TemplateIterator";
import InitEvent from "plastique/event/InitEvent";
import AppEvent from "plastique/event/AppEvent";
import OnChange from "plastique/component/OnChange";
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
                v:classappend="${!this.isValid()? 'is-invalid': ''}" 
                v:disabled="${this.disabled}"
                type="radio" v:value="${entry.value}" 
                v:model="${this.value}" v:id="${this.hashCode() +'_'+ iter.index}">
        <label class="custom-control-label" v:text="${entry.key}" v:for="${this.hashCode() +'_'+ iter.index}"></label>
    </div>
</div>
`})
class Switcher implements Jsonable, Validable, Disableable{
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<boolean>
    @OnChange(Switcher.prototype.notify)
    public value: any;
    public isRequired: boolean
    protected disabled: boolean

    constructor(private nameToValue: ReactiveMap<string, any>,
                value?: any
    ) {
        this.value = value;
    }

    private notify(): void{
        this.fireEventOnParents(Switcher.CHANGE_EVENT, this.value)
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
        return this.value !== void 0
    }
}

interface Switcher extends Component {}
export default Switcher;