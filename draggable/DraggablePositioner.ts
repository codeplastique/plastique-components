import DraggablePositionable from "./DraggablePositionable";

export default class DraggablePositioner{
    public initX: number;
    public initY: number;
    public yLimitFrom: number;
    public yLimitTill: number;
    constructor(
        private draggable: DraggablePositionable,
        private readonly fromX: number,
        private readonly fromY: number,
        private readonly isInvert: boolean
    ){
        this.setDraggable(draggable);
    }

    public setDraggable(draggable: DraggablePositionable): void{
        this.draggable = draggable;
        this.setInitPosition(draggable.xPos, draggable.yPos);
    }

    public setVerticalLimit(from: number, till: number): void{
        this.yLimitFrom = from;
        this.yLimitTill = till;
    }
    public setInitPosition(xPos, yPos): void{
        this.initX = xPos;
        this.initY = yPos;
    }
    public setOffset(x: number, y: number): void{
        let xOffset = x - this.fromX;
        let yOffset = y - this.fromY;
        let newY = this.isInvert? this.initY - yOffset: this.initY + yOffset;
        this.draggable.setCoordinates(
            this.isInvert? this.initX - xOffset: this.initX + xOffset,
            newY < this.yLimitFrom? this.yLimitFrom: (newY > this.yLimitTill? this.yLimitTill: newY));
    }
    public getRelativeYOffset(): number{
        return this.draggable.yPos - this.initY;
    }
    public getGlobalOffset(): [number, number]{
        return [
            this.draggable.xPos - this.initX + this.fromX,
            this.draggable.yPos - this.initY + this.fromY]
    }
    public isChanged(): boolean{
        return this.initX != this.draggable.xPos || this.initY != this.draggable.yPos;
    }
};