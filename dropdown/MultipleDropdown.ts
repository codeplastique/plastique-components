import DropdownOption from "./DropdownOption";
import InitEvent from "@plastique/core/event/InitEvent";
import AppEvent from "@plastique/core/event/AppEvent";
import Reactive from "@plastique/core/component/Reactive";
import Dropdown from "./Dropdown";

@Reactive
export default class MultipleDropdown<V> extends Dropdown<V>{
    @InitEvent public static readonly REMOVE_OPTION_EVENT: AppEvent<DropdownOption<any>>

    public selectedOptions: DropdownOption<V>[];

    constructor(
        options: DropdownOption<V>[],
        selectedValues: V[],
        isSearchable?: boolean,
        isNotEmptiable?: boolean
    ) {
        super(options, void 0, isSearchable, isNotEmptiable)
        this.selectedOptions = [];
        selectedValues = selectedValues || [];
        this.select(selectedValues)
    }

    protected updateMainSelected(): void{
        this.selectedOption = this.selectedOptions.length == 0?
            null
            :
            new DropdownOption(null, this.selectedOptions.map(o => o.text).join(', '))
    }

    protected isOptionSelected(option: DropdownOption<V>): boolean{
        return this.selectedOptions.includes(option);
    }

    public getSelected(): DropdownOption<V>{
        throw new Error('Use "getAllSelected" method');
    }

    public getAllSelected(): DropdownOption<V>[]{
        return this.selectedOptions;
    }

    public setSelected(value: V): void{
        throw new Error('Use "select" method');
    }

    protected selectItem (option: DropdownOption<V>): void{
        let isRemove: boolean = false
        if(option == null) {
            this.removeSelected();
        }else {
            let isRemove = this.isOptionSelected(option);
            this.searchText = '';
            if (isRemove)
                this.selectedOptions.removeValue(option);
            else
                this.selectedOptions.push(option);
            this.updateMainSelected();
        }
        let event: AppEvent<any> = isRemove? MultipleDropdown.REMOVE_OPTION_EVENT: Dropdown.SELECT_OPTION_EVENT;
        this.fireEventOnParents(event, option);
    }

    public removeSelected(): void{
        //required
        this.selectedOption = null
        this.selectedOptions = [];
    }

    public select(values: V[]): void{
        let allOptions = this.options;
        for(let value of values){
            let opt = allOptions.find(o => o.value == value)
            if(opt == null)
                throw new Error('Option is not found! Value: '+ value)
            this.selectedOptions.push(opt)
        }
        this.updateMainSelected()
    }

    public unselect(values: V[]): void{
        let opts = this.options.filter(o => values.includes(o.value))
        this.selectedOptions.removeValues(opts);
        this.updateMainSelected();
    }

    public toJSON(): Object | Object[] {
        return this.selectedOptions.map(it => it.value);
    }

    public refreshOptions(options: DropdownOption<V>[], selectedValues?: V[]) {
        this.options = options;
        selectedValues = selectedValues || this.selectedOptions.map(o => o.value)
        if(selectedValues.length > 0){
            this.removeSelected();
            this.select(selectedValues)
        }
    }
}