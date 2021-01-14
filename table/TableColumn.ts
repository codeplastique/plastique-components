import Component from "@plastique/core/component/Component";
import TableColumnEnum from "./TableColumnEnum";
import Reactive from "@plastique/core/component/Reactive";

@Reactive(function (this: TableColumn<any>) {
`<b xmlns:v="http://github.com/codeplastique/plastique" 
    class="Table__header"
    v:classappend="${this.isSorted? 'Table__header_sort': ''}" 
    v:text="${this.name}">
</b>
`})
class TableColumn<T extends TableColumnEnum | string>{
    public readonly columnType: T;
    public readonly name: string;
    public readonly isSorted: boolean

    constructor(columnType: T, name: string, isSorted?: boolean) {
        this.columnType = columnType;
        this.name = name;
        this.isSorted = isSorted;
    }
}
export default TableColumn
interface TableColumn<T> extends Component{}