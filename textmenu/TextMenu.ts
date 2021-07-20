import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import TextMenuItem from "./TextMenuItem";
import AfterAttach from "@plastique/core/component/AfterAttach";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import EventRegister from "../utils/EventRegister";
import Page from "../utils/Page";
import ReactiveReadonlyMap from "@plastique/core/collection/map/ReactiveReadonlyMap";
import Types from "@plastique/core/base/Types";
import Type from "@plastique/core/base/Type";

@Reactive(function(this: TextMenu){
let item: TextMenuItem
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Text-menu" v:onclick="${this.run}">
    <item v:component="${item}" v:each="item: ${this.items}"></item>
</div>
`})
class TextMenu {
    @InitEvent public static readonly CLOSE_EVENT: AppEvent<TextMenu>
    protected readonly items: ReadonlyArray<TextMenuItem>;
    protected closeEventRegister: EventRegister

    constructor(arg: ReadonlyArray<TextMenuItem> | ReactiveReadonlyMap<string, Function>) {
        if(Types.is(arg, Type<ReactiveReadonlyMap<any, any>>())){
            this.items = arg.map((k, v) => new TextMenuItem(k, v));
        }else
            this.items = arg;
    }

    protected run(event: Event): void{
        let item = event.getClosestComponent([TextMenuItem]).get<TextMenuItem>();
        if(item){
            item.run();
            if(this.closeEventRegister)
                this.closeEventRegister.trigger();
        }
    }

    @AfterAttach
    protected onInit(): void{
        this.closeEventRegister = Page.waitGlobalClick(
            () => this.fireEventOnParents(TextMenu.CLOSE_EVENT, this),
            [TextMenu],
        )
    }
}
export default TextMenu;
interface TextMenu extends Component{}
