import TableEntry from "../TableEntry";
import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import InitMarker from "@plastique/core/component/InitMarker";
import Marker from "@plastique/core/component/Marker";
import DraggablePositionable from "../../draggable/DraggablePositionable";

@Reactive
abstract class DraggableTableEntry extends DraggablePositionable implements TableEntry{
    @InitMarker public static readonly CURSOR: Marker;
    public isFluid: boolean;

    public abstract getHeight(): number;

    public onBeforeDrag(xPos: number, yPos: number, isInvert?: boolean) {
        this.isFluid = true
    }

    public onAfterDrag(isFail?: boolean) {
        this.isFluid = false
    }
}
export default DraggableTableEntry;
interface DraggableTableEntry extends Component{}