import Filter from "./Filter";
import Component from "@plastique/core/component/Component";
import Jsonable from "@plastique/core/hash/Jsonable";
import OnChange from "@plastique/core/component/OnChange";
import Reactive from "@plastique/core/component/Reactive";
import ValidableField from "../field/ValidableField";

@Reactive(function (this: TextFilter<any>) {
`<div xmlns:v="http://github.com/codeplastique/plastique" 
      class="Filter" 
      v:classappend="
        ${this.isFocused || this.isFilled() ? 'Filter_filled' : ''} + 
        ${this.disabled ? 'Filter_disabled' : ''}
      ">

      <label class="Filter__name" v:text="${this.name}" ></label>
      <input v:model="${this.value}" 
             v:disabled="${this.disabled}"
             class="Filter__input" 
             v:onfocus="${this.onFocus}"
             v:classappend="${!this.isValid() ? 'Filter__input_invalid' : ''}"
             v:onblur="${this.onBlur}">
             
      <i class="fas fa-times Filter__remove-btn" 
         v:if="${this.isFilled() && !this.disabled}" 
         v:onclick="${this.clear}"></i>
</div>
`})
class TextFilter<T> implements Filter<T>, Jsonable {
    private readonly name: string
    @OnChange(TextFilter.prototype.onChange)
    protected value: string;
    private isFocused: boolean;
    private disabled: boolean;
    private readonly validator: ValidableField
    private readonly matcher: (obj: T, value: string) => boolean

    constructor(name: string, validator?: ValidableField, matcher?: (obj: T, value: string) => boolean) {
        this.name = name;
        this.matcher = matcher;
        if (validator)
            this.validator = validator;
        else
            this.value = ""
    }

    private onChange(): void {
        if (this.validator)
            this.validator.setValue(this.value);
        this.fireEventOnParents(Filter.CHANGE_EVENT, this.value)
    }

    private onFocus(): void {
        this.isFocused = true;
    }

    private onBlur(): void {
        this.isFocused = false;
        if (!this.isValid()) {
            this.value = ''
            this.onChange()
        }
    }

    public isFilled(): boolean {
        let value = this.validator ? this.validator.getValue() : this.value.trim();
        return value.length != 0;
    }

    public isValid(): boolean {
        return this.validator? this.validator.isValid() : true;
    }

    public clear(): void {
        if (this.validator)
            this.validator.setValue("");
        this.value = ""
        this.isFocused = false;
    }

    public isMatch(obj: T): boolean {
        return this.matcher(obj, this.value);
    }

    public setValue(value: string): void {
        this.value = value;
        if (!this.isComponentAttached())
            this.onChange()
    }

    public toJSON(): Object {
        return this.validator ? this.validator.getValue() : this.value;
    }

    isDisabled(): boolean {
        return this.disabled;
    }

    setDisabled(isDisabled: boolean): void {
        this.disabled = isDisabled
        // if(this.validator)
        //     this.validator.setDisabled(isDisabled)
    }

}

export default TextFilter;
interface TextFilter<T> extends Component {}