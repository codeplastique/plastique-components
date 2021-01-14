import Reactive from "@plastique/core/component/Reactive";
import TableEntry from "./TableEntry";
import TableColumn from "./TableColumn";
import Type from "@plastique/core/base/Type";
import CapturedComponent from "@plastique/core/component/CapturedComponent";
import Table from "./Table";

@Reactive(function (this: SelectableTable<any>) {
let column: TableColumn<any>, entry: TableEntry;
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Table Table_clickable">
    <div v:onclick="${this.onClickTable}" >
        <header class="Table__headers">
            <b v:component="${column}"  
                v:each="column: ${this.columns}"
                v:classappend="${this.sortColumn == column ? 
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
</div>
`})
export default abstract class SelectableTable<T extends TableEntry> extends Table<T>{
    protected selectedEntry: T;

    protected constructor(
        columns: TableColumn<any>[],
        sortColumn?: TableColumn<any>,
        isAscSort: boolean = true
    ) {
        super(columns, sortColumn, isAscSort);
    }

    protected onClickTable(event: Event): void {
        let targetComponent = event.getClosestComponent([TableColumn, Type<TableEntry>()]);

        if (targetComponent.is(TableColumn)) {
            let column = targetComponent.get<TableColumn<any>>();
            if(column.isSorted)
                this.setSortColumn(column);

        } else if (targetComponent.is(Type<TableEntry>())) {
            if (window.getSelection().toString().length > 0)
                return;

            this.handleEntryClick(targetComponent).then(() => {
                let newEntry = targetComponent.get<T>();

                if(newEntry.equals(this.selectedEntry)){
                    this.selectedEntry = null;
                }else {
                    this.selectedEntry = newEntry;
                    this.onEntrySelected(this.selectedEntry)
                }
            });
        }
    }

    protected abstract onEntrySelected(entry: T): void

    /**
     * @return Promise.resolve is an entry is should be selected, Promise.rejected otherwise
     */
    protected handleEntryClick(entry: CapturedComponent): Promise<void>{
        return Promise.resolve();
    }

    public removeSelectedEntry(): void{
        this.selectedEntry = null;
    }

    public getSelectedEntry(): TableEntry{
        return this.selectedEntry;
    }
}