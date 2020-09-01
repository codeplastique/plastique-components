export default interface Draggable {
    onBeforeDrag(xPos: number, yPos: number, isInvert?: boolean): void;
    onDrag(xPos: number, yPos: number): void
    onAfterDrag(isFail?: boolean): void
}