import FilterSet from "../filter/FilterSet";
import Component from "@plastique/core/component/Component";

export default interface Filterable extends Component{
    readonly filter: FilterSet<any>
    refreshEntries(): void
}