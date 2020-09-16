import DynamicListEntry from "./DynamicListEntry";
import Component from "plastique/component/Component";
import Jsonable from "plastique/hash/Jsonable";
import Reactive from "plastique/component/Reactive";
import AppEvent from "plastique/event/AppEvent";
import InitEvent from "plastique/event/InitEvent";
import Listener from "plastique/event/Listener";
import Validable from "../state/Validable";
import Disableable from "../state/Disableable";

@Reactive
abstract class DynamicList<E extends DynamicListEntry> implements Jsonable, Validable, Disableable{
    protected disabled: boolean;
    /**
     * event signals that the entry is empty or the filling up is started
     */
    @InitEvent public static readonly CHANGE_ENTRY_STATE_EVENT: AppEvent<DynamicListEntry>
    protected constructor(
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

}

export default DynamicList;
interface DynamicList<E extends DynamicListEntry> extends Component {}
