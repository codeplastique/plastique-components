import FilterSet from "../filter/FilterSet";

export default interface Filterable{
    readonly filter: FilterSet<any>
}