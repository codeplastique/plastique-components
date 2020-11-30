import DynamicListEntry from "./DynamicListEntry";
import Component from "@plastique/core/component/Component";
import Jsonable from "@plastique/core/hash/Jsonable";
import Reactive from "@plastique/core/component/Reactive";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import Listener from "@plastique/core/event/Listener";
import Validable from "../state/Validable";
import Disableable from "../state/Disableable";
import Emptyable from "../state/Emptyable";

@Reactive(function (this: DynamicList<DynamicListEntry>){
let entry: DynamicListEntry;
`<div xmlns:v="http://github.com/codeplastique/plastique">
    <entry v:each="entry: ${this.entries}" v:component="${entry}"></entry>
</div>
`})
class DynamicList<E extends DynamicListEntry> implements Jsonable, Validable, Disableable, Emptyable{
    protected disabled: boolean;
    /**
     * event signals that the entry is empty or the filling up is started
     */
    @InitEvent public static readonly CHANGE_ENTRY_STATE_EVENT: AppEvent<DynamicListEntry>
    constructor(
        protected entries: E[],
        private entryFactory: () => E
    ){
        this.addEmptyEntry();
    }

    @Listener(DynamicList.CHANGE_ENTRY_STATE_EVENT)
    protected handleEvent(entry: E) {
        if (entry.isEmpty()) {
            this.deleteEntry(entry);
            this.entries.find(e => e.isEmpty()).focus()
        } else {
            this.addEmptyEntry();
        }
    }

    public deleteEntry(entry: E, force?: boolean): void {
        if (this.entries.length > 1 || force) {
            this.entries.removeValue(entry);
        }
    }

    public addEmptyEntry(onlyIfRequired?: boolean): void {
        if(onlyIfRequired && this.entries.find(e => e.isEmpty()) != null)
            return
        this.entries.push(this.genNewEntry());
    }

    public addEntryToTop(entry: E): void {
        this.entries.unshift(entry);
    }

    protected genNewEntry(): E{
        return this.entryFactory()
    }

    public getNonEmptyEntries(): E[]{
        return this.entries.filter(e => !e.isEmpty());
    }

    public toJSON(): Object | Object[] {
        return this.getNonEmptyEntries();
    }

    public isValid(): boolean {
        return this.getNonEmptyEntries().every(r => r.isValid())
    }

    public isDisabled(): boolean {
        return this.disabled;
    }

    public setDisabled(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this.entries.forEach(e => e.setDisabled(isDisabled));
    }

    public getEntries(): E[]{
        return this.entries;
    }

    public isEmpty(): boolean{
        return this.entries.length == 1;
    }
}

export default DynamicList;
interface DynamicList<E extends DynamicListEntry> extends Component {}
