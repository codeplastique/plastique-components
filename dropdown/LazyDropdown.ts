import Dropdown from "./Dropdown";
import DropdownOption from "./DropdownOption";
import DropdownOptionsProducer from "./DropdownOptionsProducer";
import FakeDropdownOption from "./FakeDropdownOption";

export default class LazyDropdown<V> extends Dropdown<V>{
    public isLoaded: boolean
    constructor(
        private optionsProducer: DropdownOptionsProducer<V>,
        isSearchable?: boolean,
        isNotEmptiable?: boolean,
        isSelfOptionEnable?: boolean,
        isReplenishable?: boolean,
        isReverse?: boolean
    ) {
        super([], void 0, isSearchable, isNotEmptiable, isSelfOptionEnable, isReplenishable, isReverse)
    }

    public openOptions() {
        if(this.isLoaded)
            super.openOptions();
        else
            this.loadOptions().then(() => super.openOptions()).catch(() => {});
    }

    public loadOptions(): Promise<void>{
        if(this.isLoading)
            return Promise.reject()
        this.isLoading = true
        return this.optionsProducer()
            .then(opts => {
                let val = opts[0]
                if(Array.isArray(val))
                    [this.options, this.selectedOption] = opts as Array<any>
                else {
                    this.options = opts as Array<any>;
                    this.selectedOption = null;
                }
                this.isLoaded = true;
            })
            .finally(() => this.isLoading = false)
    }

    public static ofKnownSelected<V>(
        optionsPromise: () => Promise<DropdownOption<V>[]>,
        selectedValue?: V,
        isSearchable?: boolean,
        isNotEmptiable?: boolean,
        isSelfOptionEnable?: boolean,
        isReplenishable?: boolean,
        isReverse?: boolean
    ): LazyDropdown<V>{
        let producer = () => optionsPromise().then(opts => {
            if(selectedValue != null) {
                let selectedOpt = opts.find(o => o.value == selectedValue);
                return [opts, selectedOpt? selectedOpt: new FakeDropdownOption(selectedValue.toString())]
            }else
                return opts;
        }) as any
        return new LazyDropdown<V>(producer, isSearchable, isNotEmptiable, isSelfOptionEnable, isReplenishable, isReverse);
    }
}