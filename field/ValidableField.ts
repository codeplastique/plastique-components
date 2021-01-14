import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import InitEvent from "@plastique/core/event/InitEvent";
import AppEvent from "@plastique/core/event/AppEvent";
import Jsonable from "@plastique/core/hash/Jsonable";
import OnChange from "@plastique/core/component/OnChange";
import Inject from "@plastique/core/component/Inject";
import Disableable from "../state/Disableable";
import Emptyable from "../state/Emptyable";
import Focusable from "../state/Focusable";
import RequirableValidable from "../state/RequirableValidable";
import I18n from "@plastique/core/utils/I18n";

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
        
    <div 
        class="Validable-field__message"
        v:if="${!this.disabled &&!this.isValueValid && this.getError()}" 
        v:text="${this.getError()}"></div>
 </div>
`})
class ValidableField implements Jsonable, RequirableValidable, Disableable, Emptyable, Focusable{
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<ValidableField>

    @OnChange(ValidableField.prototype.onChange)
    protected value: string;
    protected isValueValid: boolean;
    public placeholder: string;
    public isRequired: boolean
    protected disabled: boolean
    public inputType: 'text' | 'password' = 'text';

    @Inject private inputElem: HTMLInputElement

    constructor(value?: string | number, placeholder?: string | number, isRequired?: boolean) {
        this.value = value == null? '': value.toString();
        this.placeholder = placeholder == null? '': placeholder.toString();
        this.isRequired = isRequired;
        this.verify();
    }

    public setRequired(isRequired: boolean): void{
        if(this.isRequired !== isRequired) {
            this.isRequired = isRequired;
            this.verify();
        }
    }

    public setDisabled(isDisabled: boolean): void{
        this.disabled = isDisabled;
    }

    public isDisabled(): boolean {
        return this.disabled;
    }

    protected validate(value: string): boolean{
        return true;
    }

    protected getErrorMessage(): string{
        return;
    }

    private getError(): string{
        return this.isEmpty() && this.isRequired? I18n.text('field_required'): this.getErrorMessage();
    }

    protected onChange(): void{
        this.verify();
        this.fireEventOnParents(ValidableField.CHANGE_EVENT, this);
    }

    public getValue(): string {
        return this.value.trim();
    }

    public isEmpty(): boolean{
        return this.getValue().length == 0;
    }

    public setValue(value: string | number): void{
        let val = value == null? '': value.toString()
        if(this.value !== val){
            if(this.isComponentAttached()){
                //set empty parent for the fireEventOnParents ignoring
                this.runWithFakeParents(() => this.value = val, null)
            }else {
                this.value = val;
                this.verify();
            }
        }
    }

    /**
     * @return true if the field is valid, false otherwise
     */
    protected verify(): void{
        this.isValueValid = this.isEmpty()? !this.isRequired: this.validate(this.getValue());
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