import Reactive from "@plastique/core/component/Reactive";
import Table from "./Table";
import FilterSet from "../filter/FilterSet";
import Listener from "@plastique/core/event/Listener";
import Lazy from "@plastique/core/utils/Lazy";
import Component from "@plastique/core/component/Component";
import Filterable from "../state/Filterable";

@Reactive(function (this: FilterableTable) {
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Filterable-table">
    <table v:component="${this.table}" v:classappend="'Filterable-table__table'"></table>
    <filter v:component="${this.table.filter}" v:classappend="'Filterable-table__filter'"></filter>
</div>
`})
class FilterableTable{
    constructor(
        readonly table: Table<any> & Filterable
    ) {}

    @Listener(FilterSet.CHANGE_EVENT)
    @Lazy(800)
    public onChangeFilters() {
        this.table.refreshEntries();
    }
}
export default FilterableTable
interface FilterTable extends Component{}