import Filter from "./Filter";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import Listener from "@plastique/core/event/Listener";
import Component from "@plastique/core/component/Component";
import TextFilter from "./TextFilter";
import DropdownFilter from "./DropdownFilter";
import Reactive from "@plastique/core/component/Reactive";
import LazyDropdown from "../dropdown/LazyDropdown";
import MultipleDropdown from "../dropdown/MultipleDropdown";
import Dropdown from "../dropdown/Dropdown";
import ValidableField from "../field/ValidableField";
import DropdownOption from "../dropdown/DropdownOption";
import DropdownOptionsProducer from "../dropdown/DropdownOptionsProducer";
import ValidableNumber from "../field/ValidableNumber";

@Reactive(function (this: FilterSet<any>) {
let filter: Filter<any>;
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Filter-list" v:classappend="${this.filled? 'Filter-list_filled': ''}">
    <header class="Filter-list__header">
        <span v:text="#{filters}"></span>
        <i class="fas fa-ban Filter-list__clear-btn" v:onclick="${this.clearAll}"></i>
    </header>
    <div class="Filter-list__scrolling">
        <div class="Filter-list__filters">
            <filter v:component="${filter}" v:each="filter: ${this.filters}"></filter>
        </div>
    </div>
</div>
`})

abstract class FilterSet<T> {
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<FilterSet<any>>
    protected readonly filters: Filter<T>[];
    protected filled: boolean

    protected constructor(filters: Filter<T>[] = []) {
        this.filters = filters;
        this.filled = filters.some(it => it.isFilled())
    }

    @Listener(Filter.CHANGE_EVENT)
    protected onChange(val: any, filter: Filter<T>): void{
        if(this.filled != filter.isFilled())
            this.filled = this.filters.find(f => f.isFilled()) != null;
        this.fireEventOnParents(FilterSet.CHANGE_EVENT, this);
    }

    public isMatch(obj: T): boolean{
        return this.filters.filter(f => f.isFilled()).every(f => f.isMatch(obj))
    }

    public isFilled(): boolean{
        return this.filled
    }

    public clearAll(): void{
        if(this.filled) {
            this.filters.forEach(f => f.clear())
            this.filled = false;
            this.fireEventOnParents(FilterSet.CHANGE_EVENT, this);
        }
    }

    protected genNumberFilter(name: string, matcher?: (o: T, v: string) => boolean): TextFilter<T>{
        return this.genTextFilter(name, matcher, new ValidableNumber())
    }
    protected genTextFilter(name: string, matcher?: (o: T, v: string) => boolean, validator?: ValidableField): TextFilter<T>{
        return new TextFilter(name, validator, matcher);
    }
    

    protected genLazyDropdownFilter<V> (
        name: string,
        matcher: (o: T, v: DropdownOption<V>) => boolean,
        lazyOptions: DropdownOptionsProducer<V>, selfOption?: boolean
    ): DropdownFilter<T> {
        let dropdown = new LazyDropdown(lazyOptions, true, false, selfOption);
        return new DropdownFilter(name, dropdown, null, matcher);
    }

    protected genDropdownFilter<V> (name: string,
                                    options: DropdownOption<V>[],
                                    matcher?: (o: T, v: DropdownOption<V>) => boolean
    ): DropdownFilter<T>{
        let dropdown = new Dropdown(options, null, true);
        return new DropdownFilter(name, dropdown, null, matcher);
    }

    protected genMultiDropdownFilter<V> (
        name: string,
        options: DropdownOption<any>[],
        matcher?: (o: T, v: DropdownOption<V>) => boolean
    ): DropdownFilter<T>{
        let dropdown = new MultipleDropdown(options, [], true);
        return new DropdownFilter(name, dropdown, null, matcher);
    }


    protected static asString(source: any): string{
        return source == null? "": String(source);
    }

    protected static isIncludes(source: any, value: string): boolean{
        return FilterSet.asString(source).toLowerCase().includes(value.toLowerCase())
    }

    protected softTextMatcher(prop: keyof T): (o: T, v: string) => boolean{
        return (object, value) => FilterSet.isIncludes(object[prop], value);
    }

    protected dropdownValMatcher(prop: keyof T): (o: T, v: DropdownOption<any>) => boolean{
        return (object, value) => value == null || object[prop] == value.value
    }

}

export default FilterSet
interface FilterSet<T> extends Component{}