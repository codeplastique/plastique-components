import Component from "@plastique/core/component/Component";
import TableColumnEnum from "./TableColumnEnum";
import Reactive from "@plastique/core/component/Reactive";

@Reactive(function (this: TableColumn<any>) {
`<b xmlns:v="http://github.com/codeplastique/plastique" 
    class="Table__header"
    v:classappend="${this.isSortable? 'Table__header_sort': ''}" 
    v:text="${this.name}">
</b>
`})
class TableColumn<T extends TableColumnEnum | string>{
    public readonly type: T;
    public readonly name: string;
    public readonly isSortable: boolean

    constructor(type: T, name: string, isSortable?: boolean) {
        this.type = type;
        this.name = name;
        this.isSortable = isSortable;
    }
}
export default TableColumn
interface TableColumn<T> extends Component{}