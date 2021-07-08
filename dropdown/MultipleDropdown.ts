import DropdownOption from "./DropdownOption";
import InitEvent from "@plastique/core/event/InitEvent";
import AppEvent from "@plastique/core/event/AppEvent";
import Reactive from "@plastique/core/component/Reactive";
import Dropdown from "./Dropdown";
import Lazy from "@plastique/core/utils/Lazy";
import DropdownOptionsGenerator from "./DropdownOptionsGenerator";

@Reactive
export default class MultipleDropdown<V> extends Dropdown<V>{
    @InitEvent public static readonly REMOVE_OPTION_EVENT: AppEvent<DropdownOption<any>>

    private readonly selectedOptions: DropdownOption<V>[];
    private readonly optionsProducer: DropdownOptionsGenerator<V>;

    constructor(
        options: ReadonlyArray<DropdownOption<V>> | DropdownOptionsGenerator<V>,
        selectedValues: ReadonlyArray<V>,
        isSearchable?: boolean,
        isRequired?: boolean,
        isReverse?: boolean
    ) {
        super(Array.isArray(options)? options: [], void 0, isSearchable, isRequired, false, isReverse)
        this.optionsProducer = Array.isArray(options)? null: options as DropdownOptionsGenerator<V>
        this.selectedOptions = [];
        selectedValues = selectedValues || [];
        this.select(selectedValues)
    }


    public openOptions() {
        if(this.isActive)
            return;
        super.openOptions();

        if(this.optionsProducer != null) {
            this.filteredOptions = [];
            this.loadOptions().then(() => {
                if (this.menuElement)
                    this.menuElement.addEventListener('scroll', () => {
                        let bottomOfMenu = this.menuElement.scrollTop + this.menuElement.clientHeight >= (this.menuElement.scrollHeight);
                        if (bottomOfMenu)
                            this.loadOptions();
                    })
            });
        }
    }

    protected filterOptions(event: Event | any): void{
        this.searchText = event.currentTarget.value;
        this.isFiltered = this.searchText.length > 0;
        this.loadOptionsLimit();
    }

    @Lazy(400)
    private loadOptionsLimit(): void{
        this.filteredOptions = [];
        this.loadOptions().then(() => {
            this.pointer = this.filteredOptions.length > 0? 0: -1;
        });
    }

    protected loadOptions(): Promise<void>{
        this.isLoading = true;
        return this.optionsProducer(this.filteredOptions.length, 30, this.searchText).then(
            options => {
                this.isLoading = false;
                if(options.length > 0) {
                    this.filteredOptions.push.apply(this.filteredOptions, options);
                    this.calcPositions();
                }
            }
        )
    }

    protected updateMainSelected(): void{
        let newOption = this.selectedOptions.length == 0?
            null
            :
            new DropdownOption(null, this.selectedOptions.map(o => o.text).join(', '))
        this.selectOption(newOption);
    }

    protected isOptionSelected(option: DropdownOption<V>): boolean{
        return this.selectedOptions.some(it => it.equals(option))
    }

    public getSelected(): DropdownOption<V>{
        throw new Error('Use "getAllSelected" method');
    }

    public getAllSelected(): ReadonlyArray<DropdownOption<V>>{
        return this.selectedOptions;
    }

    public getAllSelectedValues(): ReadonlyArray<V>{
        return this.selectedOptions.map(it => it.value);
    }

    public setSelected(value: V): void{
        throw new Error('Use "select" method');
    }

    protected selectItem (option: DropdownOption<V>, event?: MouseEvent, isSilent?: boolean): void{
        let isRemove: boolean = false;

        if(option == null || event.ctrlKey)
            this.removeSelected();

        if(option != null) {
            let isRemove = this.isOptionSelected(option);
            this.searchText = '';
            if (isRemove)
                this.selectedOptions.removeValue(option);
            else
                this.selectedOptions.push(option);
            this.updateMainSelected();
        }
        if(!isSilent) {
            let appEvent: AppEvent<any> = isRemove ? MultipleDropdown.REMOVE_OPTION_EVENT : Dropdown.SELECT_OPTION_EVENT;
            this.fireEventOnParents(appEvent, option);
        }
    }

    public removeSelected(): void{
        super.removeSelected()
        this.selectedOptions.clear();
    }

    public select(values: ReadonlyArray<V>): void{
        let allOptions = this.options;
        for(let value of values){
            let opt = allOptions.find(o => o.value.equals(value))
            if(opt == null && this.optionsProducer == null)
                throw new Error('Option is not found! Value: '+ value)
            this.selectedOptions.push(opt)
        }
        this.updateMainSelected()
    }

    public unselect(values: ReadonlyArray<V>): void{
        this.selectedOptions.removeBy(o => values.some(v => o.value.equals(v)));
        this.updateMainSelected();
    }

    public toJSON(): Object | Object[] {
        return this.getAllSelectedValues()
    }

    public refreshOptions(options: ReadonlyArray<DropdownOption<V>>, selectedValues?: ReadonlyArray<V>) {
        this.options = options;
        selectedValues = selectedValues || this.selectedOptions.map(o => o.value)
        if(selectedValues.length > 0){
            this.removeSelected();
            this.select(selectedValues)
        }
    }
}