import TableColumn from "../TableColumn";
import CapturedComponent from "@plastique/core/component/CapturedComponent";
import Reactive from "@plastique/core/component/Reactive";
import DraggableTableEntry from "./DraggableTableEntry";
import FilledTable from "../FilledTable";
import DragArea from "../../draggable/DragArea";
import Draggable from "../../draggable/Draggable";
import DraggableList from "../../draggable/DraggableList";
import TableEntry from "../TableEntry";

@Reactive(function (this: DraggableTable<any>) {
let column: TableColumn<any>, entry: TableEntry;
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Table Table_clickable">
    <dragArea v:component="${this.dragArea}">
        <div v:onclick="${this.onClickTable}" >
            <header class="Table__headers">
                <b v:component="${column}"  
                    v:each="column: ${this.columns}"
                    v:classappend="${this.isColumnSelected(column) ?
                        (this.isAscSort ? 'Table__header_sort-asc': 'Table__header_sort-desc')
                        :
                        ''}">
                </b>
            </header>
            <div class="Table__entries">
                <entry v:component="${entry}" 
                    v:each="entry: ${this.entries}" 
                    v:classappend="${entry == this.selectedEntry? 'Table__entry_selected': ''}"></entry>
            </div>
        </div>
    </dragArea>
</div>
`})
export default abstract class DraggableTable<T extends DraggableTableEntry> extends FilledTable<T>{
    protected constructor(
        allEntries: T[],
        columns: TableColumn<TableColumnType>[],
        sortColumn?: TableColumnType | TableColumn<TableColumnType>,
        isAscSort?: boolean
    ) {
        super(allEntries, columns, sortColumn, isAscSort);
    }

    public abstract isDraggable(): boolean
    protected abstract onChangeEntryPos(entry: T, from: number, to: number): void

    protected readonly dragArea = ((superThis) => new class Drag extends DragArea {
        private fromOrder: number
        protected dragStart(event: MouseEvent): Draggable {
            if(!superThis.isDraggable())
                return;
            let captured: CapturedComponent = event.getClosestComponent([DraggableTableEntry]);
            if(captured.is(DraggableTableEntry.CURSOR)) {
                let entry = captured.get<DraggableTableEntry>();
                this.fromOrder = superThis.entries.indexOf(entry as T);
                return new DraggableList(entry.getHeight(), superThis.entries, entry)
            }
        }

        protected dragEnd(event: MouseEvent, element: Draggable) {
            let fluid = (element as DraggableList<T>).getFluidValue();
            let newOrder = superThis.entries.indexOf(fluid);
            if(this.fromOrder != newOrder)
                superThis.onChangeEntryPos(fluid, this.fromOrder, newOrder)
        }

        protected onClick(event: MouseEvent, element: Draggable): void {
            if(element)
                this.dragEnd(event, element);
            superThis.onClickTable(event);
        }
    })(this);

}