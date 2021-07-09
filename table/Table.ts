import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import TableColumn from "./TableColumn";
import TableSort from "./TableSort";
import AfterAttach from "@plastique/core/component/AfterAttach";
import BeforeDetach from "@plastique/core/component/BeforeDetach";
import TableEntry from "./TableEntry";
import BindThis from "@plastique/core/utils/BindThis";
import Loader from "../loader/Loader";
import TableColumnEnum from "./TableColumnEnum";
import Notifier from "../notifier/Notifier";
import I18n from "@plastique/core/utils/I18n";

declare global {
    type TableColumnType = TableColumnEnum | string
}

@Reactive
abstract class Table<T extends TableEntry> {
    protected static BOTTOM_SCROLL_OFFSET = 300; //px
    protected static BATCH_SIZE = 70;

    public readonly loader: Loader;
    protected readonly entries: T[] = []
    protected ignoreRefreshRequests: boolean;
    protected isAscSort: boolean;
    private sortColumn: TableColumnType | null

    protected constructor(
        protected readonly columns: TableColumn<TableColumnType>[],
        sortColumn?: TableColumnType | TableColumn<TableColumnType>,
        isAscSort: boolean = true
    ) {
        this.loader = new Loader()
        this.isAscSort = isAscSort;
        this.sortColumn = sortColumn instanceof TableColumn? sortColumn.type: sortColumn

    }

    protected onClickTable(event: Event): void {
        let targetComponent = event.getClosestComponent([TableColumn]);
        if (targetComponent.is(TableColumn)) {
            let column = targetComponent.get<TableColumn<any>>();
            if(column.isSortable)
                this.setSortColumn(column);
        }
    }

    protected abstract requestEntries(from: number, count: number, sorting?: TableSort): Promise<T[]>

    @AfterAttach
    protected init(): void {
        window.addEventListener('scroll', this.scrollAction);
    }

    @BeforeDetach
    protected destroy(): void {
        window.removeEventListener('scroll', this.scrollAction);
    }

    @BindThis
    private scrollAction(): void {
        let isBottomOfWindow =
            (document.documentElement.scrollTop + window.innerHeight) >= (document.documentElement.offsetHeight - Table.BOTTOM_SCROLL_OFFSET);
        if (isBottomOfWindow && !this.ignoreRefreshRequests && !this.loader.isLoading()) {
                this.loadEntries(this.entries.length, Table.BATCH_SIZE)
                    .then(newEntries => {
                        if(newEntries.length == 0)
                            this.ignoreRefreshRequests = true;
                    });
        }
    };

    protected appendEntries(from: number, count: number): Promise<T[]>{
        let allEntries = this.entries;
        if (from == 0)
            allEntries.clear();

        let sorting = this.getSort();
        return this.requestEntries(from, count, sorting)
            .then(entries => {
                if(from > 0 && entries.some(it => allEntries.has(it))){
                    Notifier.info(I18n.text('table_refresh'))
                    return this.appendEntries(0, Table.BATCH_SIZE)
                }

                allEntries.push(...entries);
                return entries;
            })
    }


    /**
     * @return new loaded entries
     */
    protected loadEntries(from: number, count: number): Promise<T[]> {
        if(this.loader.isLoading())
            return Promise.reject();

        this.loader.setLoading(true);
        return this.appendEntries(from, count)
            .finally(() => this.loader.setLoading(false));
    }

    isColumnSelected(column?: TableColumnType | TableColumn<TableColumnType>): boolean{
        let type = column instanceof TableColumn? column.type: column as any
        return type.equals(this.sortColumn)
    }

    public setSortColumn(column: TableColumnType | TableColumn<TableColumnType>): void {
        if(this.isColumnSelected(column))
            this.isAscSort = !this.isAscSort;
        else{
            this.sortColumn = column instanceof TableColumn? column.type: column;
            this.isAscSort = true;
        }
        this.refreshEntries()
    }

    public refreshEntries(): Promise<any> {
        this.ignoreRefreshRequests = false;
        return this.loadEntries(0, Table.BATCH_SIZE);
    }

    public getSort(): TableSort{
        return this.sortColumn?
            new TableSort(this.sortColumn, this.isAscSort ? 'ASC' : 'DESC')
            :
            null;
    }
}

interface Table<T extends TableEntry> extends Component {}
export default Table;