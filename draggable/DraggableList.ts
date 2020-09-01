import DraggablePositionable from "./DraggablePositionable";
import DraggablePositioner from "./DraggablePositioner";
import Draggable from "./Draggable";

export default class DraggableList<V extends DraggablePositionable> implements Draggable {
    private positioner: DraggablePositioner;
    private readonly height: number
    protected fluidValue?: V;
    private fluidIndex: number

    constructor(
        valueHeight: number,
        protected values?: V[],
        fluidValue?: V,
    ) {
        this.height = valueHeight;
        if(this.values && fluidValue != null)
            this.setFluidValue(fluidValue)
    }

    public setValues(values: V[]): void{
        this.values = values;
    }

    public setFluidValue(value: V): void{
        this.fluidValue = value;
        this.fluidIndex = this.values.indexOf(this.fluidValue);
    }

    public getFluidValue(): V{
        return this.fluidValue;
    }

    public onBeforeDrag(xPos: number, yPos: number, isInvert?: boolean): void{
        if(!this.fluidValue)
            throw new Error('Fluid value is not found!');

        this.positioner = new DraggablePositioner(this.fluidValue, xPos, yPos, isInvert);
        let remaining = this.values.length - 1 - this.fluidIndex;

        this.positioner.setVerticalLimit(-(this.fluidIndex * this.height), remaining * this.height);
        this.fluidValue.onBeforeDrag(0, 0);
    }

    public onDrag(xPos: number, yPos: number): void{
        let positioner = this.positioner;
        if(!positioner)
            return;

        positioner.setOffset(xPos, yPos);

        let fluidIndex = this.fluidIndex;
        let orderOffset = Math.abs(Math.round(positioner.getRelativeYOffset() / this.height));
        let offsetFactor = positioner.getRelativeYOffset() < 0? 1: -1;

        //reset rule coordinates
        this.values.filter(r => r.yPos != 0 && r != this.fluidValue)
            .forEach(r => this.updateRuleConnectors(r, 0));

        for (let i = 1; i < orderOffset + 1; i++) {
            let order = positioner.getRelativeYOffset() < 0? fluidIndex - i: fluidIndex + i;
            this.values[order].setCoordinates(0, 0);
            this.updateRuleConnectors(this.values[order], this.height * offsetFactor);
        }
        this.fluidValue.onDrag(xPos, yPos);
    }


    public onAfterDrag(isFail?: boolean): void{
        let positioner = this.positioner;
        this.positioner = null;

        if(positioner) {
            if(!isFail && positioner.isChanged()) {
                let fluidNewOrder = Math.round(this.fluidIndex + (this.fluidValue.yPos / this.height));
                if (fluidNewOrder != this.fluidIndex) {
                    this.values.move(this.fluidIndex, fluidNewOrder)
                    //put the rule exactly in the frame
                    this.updateRuleConnectors(this.fluidValue, (fluidNewOrder - this.fluidIndex) * this.height);
                }else
                    isFail = true; // nothing changes
            }
            this.values.forEach((value => {
                value.setCoordinates(0, 0);
                value.onAfterDrag(isFail);
            }))
        }
    }


    public updateRuleConnectors(rule: V, y: number): void {
        rule.setCoordinates(0, y);
        rule.onDrag(0, y);
    }


}