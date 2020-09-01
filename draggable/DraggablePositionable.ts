import Draggable from "./Draggable";

export default abstract class DraggablePositionable implements Draggable{
    public xPos: number = 0;
    public yPos: number = 0;

    public onBeforeDrag(xPos: number, yPos: number, isInvert?: boolean): void{}
    public onDrag(xPos: number, yPos: number): void{}
    public onAfterDrag(isFail?: boolean): void{}

    public setCoordinates(x: number, y: number): void{
        this.xPos = x;
        this.yPos = y;
    }
}