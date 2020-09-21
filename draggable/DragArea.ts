import Component from "@plastique/core/component/Component";
import Draggable from "./Draggable";
import Reactive from "@plastique/core/component/Reactive";
import BindThis from "@plastique/core/utils/BindThis";

@Reactive(function (this: DragArea) {
`<div xmlns:v="http://github.com/codeplastique/plastique"
    v:onmousedown.left="${this.onMouseDown}"
    v:onkeydown.esc.prevent="${this.onEscapeDown}">
    <v:slot>
</div>
`})
abstract class DragArea {
    protected draggableElement: Draggable;
    private isMoved: boolean;

    protected reset(event: MouseEvent): void{
        if(this.draggableElement)
            return this.onMouseUp(event);

        document.addEventListener("mouseup", this.onMouseUp);
        document.addEventListener("mousemove", this.onMouseMove);
        this.isMoved = false;
    }


    public onMouseDown(event: MouseEvent): void {
        this.reset(event);
        this.draggableElement = this.dragStart(event);
        if(this.draggableElement) {
            let xPos = event.clientX;
            let yPos = event.clientY;
            this.draggableElement.onBeforeDrag(xPos, yPos);
        }
    }

    public dragWithElem(draggableElement: Draggable, xPos: number, yPos: number): void {
        this.reset(null);
        this.draggableElement = draggableElement;
        this.draggableElement.onBeforeDrag(xPos, yPos);
    }

    @BindThis
    protected onMouseMove(event: MouseEvent): void {
        if(this.draggableElement) {
            let xPos = event.clientX;
            let yPos = event.clientY;
            (this.draggableElement as Draggable).onDrag(xPos, yPos);
            this.dragMove(event, this.draggableElement);
        }
        this.isMoved = true;
    }

    protected onEscapeDown(event: MouseEvent): void {
        if(this.draggableElement)
            this.onMouseUp(event, true)
    }

    @BindThis
    protected onMouseUp(event: MouseEvent, isCancel?: boolean): void {
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMove);

        let elem: Draggable = this.draggableElement;
        if(elem) {
            elem.onAfterDrag(isCancel);
            if(this.isMoved) {
                if(isCancel)
                    this.dragCancel(event, elem);
                else
                    this.dragEnd(event, elem);
            }else if(!isCancel)
                this.onClick(event, elem);
            this.draggableElement = null;
        }else //if(!this.isMoved)
            this.onClick(event);
    }

    protected abstract dragStart(event: MouseEvent): Draggable;
    protected dragMove(event: MouseEvent, element: Draggable): void{}
    protected dragEnd(event: MouseEvent, element: Draggable): void{}
    protected dragCancel(event: MouseEvent, element: Draggable): void{}
    protected onClick(event: MouseEvent, element?: Draggable): void{}
}

interface DragArea extends Component{}
export default DragArea