import Component from "@plastique/core/component/Component";
import DropdownOption from "./DropdownOption";
import InitEvent from "@plastique/core/event/InitEvent";
import AppEvent from "@plastique/core/event/AppEvent";
import Reactive from "@plastique/core/component/Reactive";
import I18n from "@plastique/core/utils/I18n";
import Inject from "@plastique/core/component/Inject";
import TemplateIterator from "@plastique/core/utils/TemplateIterator";
import Jsonable from "@plastique/core/hash/Jsonable";
import FakeDropdownOption from "./FakeDropdownOption";
import Validable from "../state/Validable";
import Disableable from "../state/Disableable";

@Reactive(function(this: Dropdown<any>){
let option: DropdownOption<any>, iter: TemplateIterator;
`<div class="Dropdown" xmlns:v="http://github.com/codeplastique/plastique"
     v:classappend="${
            (this.isActive ? ('Dropdown_active '+ (this.isStraight? 'Dropdown_straight': 'Dropdown_reverse')): '')
            + (this.isSearchable? '': ' Dropdown_clickable') 
            + (this.disabled? ' Dropdown_disabled': '')}" >
    
    <i class="fas fa-spinner fa-spin Dropdown__load-icon" v:if="${this.isLoading}"></i>
    <i class="fas fa-caret-down Dropdown__icon"
        v:if="${!this.isLoading && (!this.hasAnySelected() || this.isNotEmptiable)}"
        v:classappend="${this.isSelfOptionEnable ? 'invisible' : ''}"></i>
    <i class="fas fa-times Dropdown__close-btn"
        v:if="${!this.isLoading && this.hasAnySelected() && !this.isNotEmptiable}"
        v:onclick.stop="${this.selectItem(null)}"></i>
        
    <div class="Dropdown__text"
         v:if="${!this.isFiltered}"
         v:classappend="${(!this.hasAnySelected() || this.isActive) ? 'text-secondary' : ''}"
         v:text="${this.hasAnySelected() ? this.selectedOption.text: (!this.isSelfOptionEnable ? this.placeholder : '')}">
    </div>
    
    <input class="Dropdown__search form-control"
           v:readonly="${!this.isSearchable || !this.isActive}"
           v:ref="${this.inputElement}"
           v:classappend="${!this.isValid()? 'is-invalid' : ''}"
           autocomplete="off"
           v:value="${this.searchText}"
           v:oninput="${this.filterOptions}"
           v:onfocus.prevent="${this.openOptions}"
           v:onblur="${this.onBlur}"
           v:onclick="${this.openOptions}"
           v:disabled="${this.disabled}"
           v:onkeydown.up.prevent="${this.prevItem}"
           v:onkeydown.down.prevent="${this.nextItem}" 
           v:onkeydown.enter.prevent=""
           v:onkeyup.enter.prevent="${this.selectCurrentItem}" 
           v:onkeyup.esc="${this.onBlur}"/>
           
    <div class="Dropdown__menu" 
        v:if="${this.isActive}" 
        v:ref="${this.menuElement}"
        v:style="'max-height:' +${this.menuHeight}+ 'px'" 
        tabindex="-1" 
        v:onmousedown.prevent="">
        
        <v:block v:each="option, iter: ${this.filteredOptions}">
            <div class="Dropdown__item"
                 v:classappend="${iter.index == this.pointer ? 'Dropdown__item_flowable' : ''} + ${this.isOptionSelected(option)? ' Dropdown__item_selected': ''}"
                 v:onclick.stop="${this.selectItem(option)}">
                 
                 <option v:component="${option}"></option>
            </div>
        </v:block>
    </div>
</div>    
`})
class Dropdown<V> implements Jsonable, Validable, Disableable{
    @InitEvent public static readonly SELECT_OPTION_EVENT: AppEvent<DropdownOption<any>>;

    private static readonly ELEMENTS_IN_MENU = 7;

    public isActive: boolean;
    public isFiltered: boolean;
    public isSearchable: boolean;
    public isNotEmptiable: boolean;
    protected isRequired: boolean;
    protected isLoading: boolean;
    protected pointer: number;
    protected menuHeight: number;
    public optionHeight: number = 38; //px
    protected isStraight: boolean;
    public disabled: boolean;

    protected options: DropdownOption<V>[];
    protected filteredOptions: DropdownOption<V>[] = [];
    protected selectedOption: DropdownOption<V>;

    protected searchText: string = '';
    public placeholder: string = I18n.text("select");

    @Inject
    protected menuElement: HTMLElement;
    @Inject
    protected inputElement: HTMLInputElement;

    constructor(
        options: DropdownOption<V>[],
        selected?: V,
        isSearchable?: boolean,
        isNotEmptiable?: boolean,
        protected isSelfOptionEnable?: boolean,
        protected isReplenishable?: boolean,
        protected isReverse?: boolean
    ) {
        this.options = options;
        if(selected !== void 0)
            this.setSelected(selected)
        this.isSearchable = isSearchable;
        this.isNotEmptiable = isNotEmptiable;
        this.filteredOptions = [];
        this.isStraight = !isReverse;
    }

    public setReverse(isReverse: boolean): void{
        this.isReverse = isReverse;
        this.isStraight = !isReverse;
    }

    protected filterOptions(event: Event | any): void{
        this.searchText = event.currentTarget.value;
        this.isFiltered = this.searchText.length > 0;
        let searchText = this.searchText.toLowerCase();
        this.filteredOptions = this.options.filter(o => o.text.toLowerCase().indexOf(searchText) >= 0);
        this.pointer = this.filteredOptions.length > 0? 0: -1;
    }

    public setFocus(): void{
        this.inputElement.focus();
    }

    protected calcPositions(): void{
        // if(this.filteredOptions.length == 0)
        //     return;
        // this.optionHeight = parseInt(window.getComputedStyle(this.filteredOptions[0].getElement()).height);
        this.menuHeight = this.optionHeight * (this.filteredOptions.length > Dropdown.ELEMENTS_IN_MENU ? Dropdown.ELEMENTS_IN_MENU : this.filteredOptions.length);

        if(!this.isReverse)
            this.isStraight = window.innerHeight >= (this.inputElement.getBoundingClientRect().bottom + this.menuHeight);
    }

    public openOptions(): void {
        this.isActive = true;
        this.isFiltered = false;
        this.searchText = this.isSelfOptionEnable && this.isSelected()? this.selectedOption.text: '';
        this.pointer = -1;
        this.filteredOptions = this.options;
        this.calcPositions();
    }

    protected onBlur(): void {
        if(this.isActive) {
            if(this.isSelfOptionEnable){
                let text = this.searchText.trim();
                let selected = this.getSelected()
                if(selected != null && selected.value == null && selected.text == text)
                    return this.closeOptions();

                let newOption = text.length != 0 ? new DropdownOption<V>(null, text) : null;

                if((selected == null && newOption == null)
                    ||
                    (selected != null && selected.value == null && selected.text == text)
                )
                    return this.closeOptions();

                this.selectedOption = newOption;
                this.fireEventOnParents(Dropdown.SELECT_OPTION_EVENT, newOption);

            }
            this.closeOptions();
        }
    }

    public closeOptions(): void {
        this.searchText = '';
        this.isFiltered = false;
        this.isActive = false;
    }

    protected prevItem(): void {
        if(this.pointer < 0)
            return this.nextItem();
        if(this.pointer == 0)
            return;

        this.pointer -= 1;
        const prevIndexScrollTop = this.optionHeight * this.pointer;

        if(prevIndexScrollTop < this.menuElement.scrollTop)
            this.menuElement.scrollTop -= this.optionHeight;
    }
    protected nextItem(): void{
        if(this.pointer + 1 == this.filteredOptions.length)
            return;
        this.pointer += 1;
        const nextIndexScrollTop = this.optionHeight * this.pointer;
        if(nextIndexScrollTop >= this.menuElement.scrollTop + this.menuElement.clientHeight)
            this.menuElement.scrollTop += this.optionHeight;
    }
    protected selectCurrentItem(event: MouseEvent, isSilent?: boolean): void{
        this.selectItem(this.filteredOptions[this.pointer], event, isSilent);
    }

    protected selectItem (option: DropdownOption<V>, event?: MouseEvent, isSilent?: boolean): void{
        if(this.selectedOption != option) {
            this.selectedOption = option;
            if(!isSilent)
                this.fireEventOnParents(Dropdown.SELECT_OPTION_EVENT, option);
            this.searchText = '';
        }
        this.closeOptions();
    }

    public getSelected(): DropdownOption<V>{
        return this.isSelected()? this.selectedOption: null
    }

    protected isOptionSelected(option: DropdownOption<V>): boolean{
        return this.selectedOption == option;
    }

    public setSelected(value: V): void{
        let options = this.options;
        let option = options.find(o => o.value == value);
        if(option == null && value == null)
            this.selectedOption = null
        else
            this.selectedOption = option || new FakeDropdownOption(String(value))
    }

    public removeSelected(): void{
        this.selectedOption = null;
    }

    public toJSON(): Object | Object[] {
        let selected = this.getSelected();
        return this.isSelected()? (selected.value == null? selected.text: selected.value): null;
    }

    public setRequired(isRequired: boolean): void{
        this.isRequired = isRequired;
    }

    public isValid(): boolean {
        return !this.isFakeSelected() && (!this.isRequired || this.isSelected());
    }

    public isSelected(): boolean{
        return this.hasAnySelected() && !this.isFakeSelected()
    }

    protected hasAnySelected(): boolean{
        return this.selectedOption != null;
    }

    protected isFakeSelected(): boolean{
        return this.selectedOption instanceof FakeDropdownOption
    }

    public hasOptionValue(value: V): boolean{
        return this.options.find(o => o.value == value) != null
    }

    public isDisabled(): boolean {
        return this.disabled;
    }
    public setDisabled(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    public getOptions(): ReadonlyArray<DropdownOption<V>>{
        return this.options;
    }

    public refreshOptions(options: DropdownOption<V>[]): void{
        this.options = options;
        if(this.selectedOption)
            this.setSelected(this.selectedOption.value)
    }

    public addOption(newOption: DropdownOption<V>): void{
        this.options.push(newOption)
    }

}

export default Dropdown
interface Dropdown<V> extends Component{}
