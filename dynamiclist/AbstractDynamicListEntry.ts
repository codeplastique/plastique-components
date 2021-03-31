import DynamicListEntry from "./DynamicListEntry";
import DynamicList from "./DynamicList";
import Component from "@plastique/core/component/Component";

abstract class AbstractDynamicListEntry implements DynamicListEntry{
    protected isEmptyBefore: boolean
    protected constructor(isEmpty: boolean = true) {
        this.isEmptyBefore = isEmpty;
    }

    protected onChange(): void{
        let isEmptyNow = this.isEmpty();
        if(this.isEmptyBefore != isEmptyNow) {
            this.fireEventOnParents(DynamicList.CHANGE_ENTRY_STATE_EVENT, this)
            this.isEmptyBefore = isEmptyNow;
        }
    }

    abstract focus(): void
    abstract isDisabled(): boolean
    abstract isEmpty(): boolean
    abstract isValid(): boolean
    abstract setDisabled(isDisabled: boolean): void
}
export default AbstractDynamicListEntry
interface AbstractDynamicListEntry extends Component{}