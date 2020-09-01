import Component from "plastique/component/Component";
import Reactive from "plastique/component/Reactive";
import InitEvent from "plastique/event/InitEvent";
import AppEvent from "plastique/event/AppEvent";
import Jsonable from "plastique/hash/Jsonable";
import OnChange from "plastique/component/OnChange";
import Inject from "plastique/component/Inject";
import Validable from "../state/Validable";
import Disableable from "../state/Disableable";

@Reactive(function(this: ValidableField){
`<div xmlns:v="http://github.com/codeplastique/plastique" 
    class="Validable-field" 
    v:classappend="${!this.isValueValid ? 'Validable-field_invalid' : ''}">
    
    <input v:type="${this.inputType}" 
        v:ref="${this.inputElem}"
        class="form-control Validable-field__input" 
        v:model="${this.value}" 
        v:disabled="${this.disabled}"
        v:classappend="${!this.isValueValid ? 'is-invalid' : ''}"
        v:placeholder="${this.placeholder}">
    <div v:if="${!this.isValueValid && this.errorMessage}" v:text="${this.errorMessage}" class="Validable-field__message"></div>
 </div>
`})
class ValidableField implements Jsonable, Validable, Disableable{
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<ValidableField>

    @OnChange(ValidableField.prototype.verify) protected value: string;
    protected isValueValid: boolean;
    public placeholder: string;
    protected errorMessage: string
    public isSilent: boolean
    public isRequired: boolean
    protected disabled: boolean
    public inputType: 'text' | 'password' = 'text';
    @Inject private inputElem: HTMLInputElement

    constructor(value: string = '', placeholder: string | number = '', isRequired?: boolean) {
        this.value = value;
        this.placeholder = String(placeholder);
        this.isRequired = isRequired;
        this.isValueValid = true;
    }

    public setRequired(isRequired: boolean, silent?: boolean): void{
        if(this.isRequired == isRequired)
            return;

        this.isRequired = isRequired;
        if(!this.isSilent && silent){
            this.isSilent = true
            this.verify()
            this.isSilent = false
        }else
            this.verify()
    }

    public setDisabled(isDisabled: boolean): void{
        this.disabled = isDisabled;
    }

    public isDisabled(): boolean {
        return this.disabled;
    }

    protected validate(value: string): boolean{
        return true
    }

    public verify(): void{
        let isValid = !this.isRequired || !this.isEmpty();
        this.isValueValid = isValid && this.validate(this.getValue());
        if(this.isValueValid)
            this.errorMessage = null;
        if(!this.isSilent && this.isComponentAttached())
            this.fireEventOnParents(ValidableField.CHANGE_EVENT, this);
    }

    public getValue(): string {
        return this.value.trim();
    }

    public isEmpty(): boolean{
        return this.getValue().length == 0;
    }

    public setValue(value: string): void{
        this.value = value;
    }

    public isValid(): boolean{
        return this.isValueValid
    }

    public toJSON(): Object | Object[] {
        return this.getValue();
    }

    public focus(): void{
        if(this.isComponentAttached())
            this.inputElem.focus()
    }

    public setInputType(type: 'text' | 'password'): void{
        this.inputType = type;
    }
}

export default ValidableField;
interface ValidableField extends Component {}