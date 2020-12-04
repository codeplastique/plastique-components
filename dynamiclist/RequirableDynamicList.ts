import DynamicList from "./DynamicList";
import RequirableDynamicListEntry from "./RequirableDynamicListEntry";
import RequirableValidable from "../state/RequirableValidable";

export default class RequirableDynamicList<E extends RequirableDynamicListEntry> extends DynamicList<E> implements RequirableValidable{
    protected isRequired: boolean

    constructor(
        entries: E[],
        entryFactory: () => E,
        isRequired?: boolean
    ) {
        super(entries, entryFactory);
        this.isRequired = isRequired;
    }

    public setRequired(isRequired: boolean): void {
        this.isRequired = isRequired;
        if(isRequired)
            this.requiredFirstEntry()
        else
            this.entries[0].setRequired(false);
    }

    public addEntry(entry: E, toTop?: boolean) {
        super.addEntry(entry, toTop);
        this.requiredFirstEntry();
    }

    public deleteEntry(entry: E, force?: boolean) {
        super.deleteEntry(entry, force);
        this.requiredFirstEntry();
    }

    protected requiredFirstEntry(): void{
        if(this.isRequired)
            this.entries[0].setRequired(this.isEmpty());
    }

    public isValid(): boolean {
        return (!this.isRequired || !this.isEmpty()) && super.isValid();
    }
}