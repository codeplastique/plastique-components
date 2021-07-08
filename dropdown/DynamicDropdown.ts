import DropdownOption from "./DropdownOption";
import Reactive from "@plastique/core/component/Reactive";
import Lazy from "@plastique/core/utils/Lazy";
import Dropdown from "./Dropdown";
import DropdownOptionsGenerator from "./DropdownOptionsGenerator";

@Reactive
export default class DynamicDropdown<V> extends Dropdown<V>{
    private static readonly OPTIONS_COUNT = 30;

    constructor(
        private optionProducer: DropdownOptionsGenerator<V>,
        selected?: V,
        isSearchable?: boolean,
        isRequired?: boolean,
        isCustomOptionEnable?: boolean
    ) {
        super([], selected, isSearchable, isRequired, isCustomOptionEnable);
    }

    public setOptionProducer(value: DropdownOptionsGenerator<V>) {
        this.optionProducer = value;
    }

    public openOptions(): void {
        if(this.isActive)
            return;
        super.openOptions();
        this.filteredOptions = [];
        this.loadOptions().then(() => {
            if(this.menuElement)
                this.menuElement.addEventListener('scroll', () => {
                    let bottomOfMenu = this.menuElement.scrollTop + this.menuElement.clientHeight >= (this.menuElement.scrollHeight);
                    if (bottomOfMenu)
                        this.loadOptions();
                })
        });
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
        return this.optionProducer(this.filteredOptions.length, DynamicDropdown.OPTIONS_COUNT, this.searchText).then(
            options => {
                this.isLoading = false;
                if(options.length > 0) {
                    this.filteredOptions.push.apply(this.filteredOptions, options);
                    this.calcPositions();
                }
            }
        )
    }
}