import SelectableTable from "./SelectableTable";
import TableEntry from "./TableEntry";
import Reactive from "@plastique/core/component/Reactive";
import TableSort from "./TableSort";
import Table from "./Table";
import TableColumn from "./TableColumn";
import TableColumnEnum from "./TableColumnEnum";

@Reactive
export default abstract class FilledTable<T extends TableEntry> extends SelectableTable<T>{
    protected readonly allEntries: T[];
    protected constructor(allEntries: T[], columns: TableColumn<any>[], sortColumn: TableColumn<any>, isAscSort: boolean) {
        super(columns, sortColumn, isAscSort);
        this.allEntries = allEntries;
    }

    protected requestEntries(from: number, count: number, sorting?: TableSort): Promise<T[]> {
        let subList = this.allEntries;
        if(sorting){
            subList = subList.slice();
            this.sortEntries(subList, sorting.field);
            if(sorting.direction == "DESC")
                subList = subList.reverse()
        }
        subList = subList.slice(from, from + Table.BATCH_SIZE);
        return Promise.resolve(subList);
    }

    protected abstract sortEntries(entries: T[], sortField: string | TableColumnEnum): void

    public getAllEntries(): T[]{
        return this.allEntries;
    }

    public setAllEntries(allEntries: T[]): void{
        this.allEntries.clear(...allEntries);
        this.refreshEntries();
    }

    public addEntry(entry: T, pos: number): void{
        this.allEntries.splice(pos, 0, entry);
        this.refreshEntries();
    }

    protected removeEntry(entry: T): void {
        this.allEntries.removeValue(entry);
        this.refreshEntries();
    }
}