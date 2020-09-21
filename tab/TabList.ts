import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import ReactiveMap from "@plastique/core/collection/ReactiveMap";

@Reactive(() => {
let entry: {key: String, value: String};
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Tabs">
    <div class="Tabs__menu nav nav-tabs nav-fill">
        <li class="nav-item Tabs__item-wrap" v:each="entry: ${this.slotNameToName}">
            <button class="nav-link Tabs__item" 
                v:text="${entry.value}" 
                v:onclick="${this.selectTab(entry.key)}"
                v:classappend="${this.activeSlotName == entry.key? 'active Tabs__item_active': ''}">
            </button>
        </li>
    </div>
    <section class="Tabs__section">
        <v:slot v:name="${this.activeSlotName}"/>
    </section>
</div>
`})
class TabList {
    private readonly slotNameToName: ReactiveMap<string, string>;
    private activeSlotName: String;
    constructor(slotNameToName: ReactiveMap<string, string>, activeSlotName?: string) {
        this.slotNameToName = slotNameToName;
        this.activeSlotName = activeSlotName;
    }

    public selectTab(slotName: string): void{
        this.activeSlotName = slotName;
    }
}
interface TabList extends Component{}
export default TabList
