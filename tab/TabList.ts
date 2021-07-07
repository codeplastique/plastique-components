import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import MapEntry from "@plastique/core/collection/map/MapEntry";
import ReactiveReadonlyMap from "@plastique/core/collection/map/ReactiveReadonlyMap";

@Reactive(function (this: TabList){
let entry: MapEntry<string, string>;
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Tabs">
    <div class="Tabs__menu nav nav-tabs nav-fill">
        <li class="nav-item Tabs__item-wrap" v:each="entry: ${this.keyToName}">
            <button class="nav-link Tabs__item" 
                v:text="${entry.value}" 
                v:onclick="${this.selectKey(entry.key)}"
                v:classappend="${this.selected == entry.key? 'active Tabs__item_active': ''}">
            </button>
        </li>
    </div>
    <section class="Tabs__section">
        <v:slot v:name="${this.selected}"/>
    </section>
</div>
`})
class TabList {
    protected readonly keyToName: ReactiveReadonlyMap<string, string>;
    protected selected: string;
    constructor(slotKeyToName: ReactiveReadonlyMap<string, string>, activeSlotKey?: string) {
        this.keyToName = slotKeyToName;
        this.selected = activeSlotKey;
    }

    public selectKey(slotKey: string): void{
        this.selected = slotKey;
    }

    public getSelectedKey(): string{
        return this.selected;
    }
}
interface TabList extends Component{}
export default TabList
