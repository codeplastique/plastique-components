import Component from "@plastique/core/component/Component";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import Reactive from "@plastique/core/component/Reactive";
import Page from "plastique-components/utils/Page";

@Reactive(function (this: TimePickerItem) {
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Time-picker__item"  v:onwheel.prevent="${this.onWheel}">
    <i class="fas fa-caret-up Time-picker__item-btn" 
        v:onmousedown="${this.setMultiValue(-1)}" 
        v:classappend="${this.value == this.fromValue? 'Time-picker__item-btn_inactive': ''}"></i>
        
    <input class="Time-picker__item-val" 
        v:value="${this.get2digit(this.value)}" 
        maxlength="2"
        v:readonly="${this.isDisable}"
        v:onchange="${this.onChange}"/>
        
    <i class="fas fa-caret-down Time-picker__item-btn" 
        v:onmousedown="${this.setMultiValue(1)}" 
        v:classappend="${this.value == this.tillValue? 'Time-picker__item-btn_inactive': ''}"></i>
</div>
`})
class TimePickerItem {
    @InitEvent public static readonly EVENT: {
        CHANGE: AppEvent<number>
    }

    constructor(
        public value: number,
        protected fromValue: number,
        protected tillValue: number,
        public isDisable?: boolean
    ) {
    }

    protected onWheel(event: WheelEvent): void{
        let delta = event.deltaY || event.detail || (event as any).wheelDelta;
        this.setValue(this.value + (delta > 0? 1: -1));
    }
    protected onChange(event: Event): void{
        if(!this.setValue(+((event.target as any).value) || 0))
            (event.target as any).value = this.get2digit(this.value)
    }
    public setValue(value: number): boolean{
        if(this.isDisable || value < this.fromValue || value > this.tillValue)
            return false;

        this.value = value;
        this.fireEventOnParents(TimePickerItem.EVENT.CHANGE, value)
        return true;
    }

    protected setMultiValue(factor: number): void{
        let timerId: number, intervalId: number;

        Page.addSingleEventListener('mouseup', () => {
            clearTimeout(timerId);
            clearInterval(intervalId);
        })

        timerId = setTimeout(() => {
            intervalId = setInterval(() => {
                this.setValue(this.value + factor);
            }, 100);
        }, 300);

        this.setValue(this.value + factor);
    }

    protected get2digit(numb: number): string{
        return numb < 10? '0'+ numb: String(numb);
    }
}

interface TimePickerItem extends Component {}
export default TimePickerItem;