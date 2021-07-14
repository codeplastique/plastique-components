import Component from "@plastique/core/component/Component";
import Listener from "@plastique/core/event/Listener";
import Filter from "./Filter";
import Reactive from "@plastique/core/component/Reactive";
import Jsonable from "@plastique/core/hash/Jsonable";
import MultipleDropdown from "../dropdown/MultipleDropdown";
import Dropdown from "../dropdown/Dropdown";
import DropdownOption from "../dropdown/DropdownOption";

@Reactive(function (this: DropdownFilter<any>) {
`<div xmlns:v="http://github.com/codeplastique/plastique" 
    class="Filter" 
    v:classappend="${this.dropdown.isActive || this.isFilled()? 'Filter_filled': ''}">
    
    <label v:text="${this.name}" class="Filter__name"></label>
    <dropdown v:component="${this.dropdown}" v:classappend="'Dropdown_filter'"></dropdown>
</div>
`})
class DropdownFilter<T> implements Filter<T>, Jsonable {
    private readonly name: string
    public dropdown: Dropdown<any>
    public validator: (option: DropdownOption<any>) => boolean
    private readonly matcher: (obj: T, value: DropdownOption<any>) => boolean

    constructor(
        name: string,
        dropdown: Dropdown<any>,
        validator?: (option: DropdownOption<any>) => boolean,
        matcher?: (obj: T, value: DropdownOption<any>) => boolean
    ){
        this.name = name;
        this.matcher = matcher;
        this.dropdown = dropdown;
        this.validator = validator
        dropdown.placeholder = '';
    }

    @Listener(Dropdown.SELECT_OPTION_EVENT, MultipleDropdown.REMOVE_OPTION_EVENT)
    protected onChange(value: DropdownOption<any>): void{
        if(value && this.validator && !this.validator(value)){
            this.dropdown.removeSelected()
        }else
            this.fireEventOnParents(Filter.CHANGE_EVENT, value)
    }

    public isFilled(): boolean{
        return this.dropdown.isSelected();
    }

    public isMatch(obj: T): boolean {
        return this.matcher(obj, this.dropdown.getSelected());
    }

    public clear(): void {
        this.dropdown.removeSelected();
    }

    public toJSON():  Object | Object[] {
        return this.dropdown.toJSON();
    }

}

export default DropdownFilter;
interface DropdownFilter<T> extends Component {}
