import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import TimePicker from "./TimePicker";
import Time from "plastique-components/datetime/Time";
import InitEvent from "@plastique/core/event/InitEvent";
import AppEvent from "@plastique/core/event/AppEvent";
import Listener from "@plastique/core/event/Listener";

@Reactive(function(this: TimeRangePicker){
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Popup">
    <picker v:component="${this.from}"></picker> – <picker v:component="${this.till}"></picker>
</div>
`})
class TimeRangePicker {
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<TimeRangePicker>

    protected readonly from: TimePicker;
    protected readonly till: TimePicker;

    constructor(
        range?: [Time?, Time?],
        showSeconds: boolean = false,
        isDisable?: boolean
    ) {
        range = range || [];
        let from = range[0] || new Time();
        let till = range[1] || new Time(23, 59, 59);
        this.from = new TimePicker(from, showSeconds, isDisable);
        this.till = new TimePicker(till, showSeconds, isDisable);
    }

    public getRange(): [Time, Time]{
        return [this.from.getTime(), this.till.getTime()]
    }

    @Listener(TimePicker.EVENT.CHANGE)
    protected onChange(): void{
        this.fireEventOnParents(TimeRangePicker.CHANGE_EVENT, this)
    }

}
interface TimeRangePicker extends Component{}
export default TimeRangePicker;