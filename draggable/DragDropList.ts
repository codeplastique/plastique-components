import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import InitEvent from "@plastique/core/event/InitEvent";
import AppEvent from "@plastique/core/event/AppEvent";
import CapturedComponent from "@plastique/core/component/CapturedComponent";
import InitMarker from "@plastique/core/component/InitMarker";
import Marker from "@plastique/core/component/Marker";
import DraggablePositionable from "./DraggablePositionable";
import Draggable from "./Draggable";
import DraggableList from "./DraggableList";
import DragArea from "./DragArea";

@Reactive(function(this: DragDropList<DraggablePositionable>){
let entry: DraggablePositionable
`<div xmlns:v="http://github.com/codeplastique/plastique">
    <dragarea v:component="${this.dragArea}">
        <entry v:component="${entry}" v:each="entry: ${this.values}"></entry>
    </dragarea>
</div>
`})
class DragDropList<V extends DraggablePositionable> extends DraggableList<V>{
    @InitMarker public static readonly CURSOR_MARKER: Marker;
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<DraggablePositionable>;
    private readonly dragArea: DragArea;

    constructor(entryHeight: number, entries: V[]) {
        super(entryHeight, entries);
        let self = this;
        this.dragArea = new class Area extends DragArea {
            protected dragStart(event: MouseEvent): Draggable {
                let captured: CapturedComponent = event.getClosestComponent([DragDropList.CURSOR_MARKER]);

                if(captured.is(DragDropList.CURSOR_MARKER)){
                    self.setFluidValue(captured.get())
                    return self;
                }
            }
        }
    }

    protected onValueChange(value: V, oldOrder: number, newOrder: number) {
        this.fireEventOnParents(DragDropList.CHANGE_EVENT, value)
    }
}
interface DragDropList<V extends DraggablePositionable> extends Component{}
export default DragDropList;