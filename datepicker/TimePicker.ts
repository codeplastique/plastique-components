import Component from "@plastique/core/component/Component";
import TimePickerItem from "./TimePickerItem";
import Listener from "@plastique/core/event/Listener";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import Reactive from "@plastique/core/component/Reactive";
import Time from "plastique-components/datetime/Time";

@Reactive(function (this: TimePicker) {
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Time-picker" v:classappend="${this.isDisable? 'Time-picker_inactive': ''}">
    <hour v:component="${this.hourPicker}"></hour>:<minute v:component="${this.minutePicker}"></minute>
    <v:block v:if="${this.showSeconds}">:<second v:component="${this.secondPicker}"></second></v:block>
</div>
`})
class TimePicker {
    @InitEvent public static readonly EVENT: {
        CHANGE: AppEvent<Time>
    }
    protected hourPicker: TimePickerItem;
    protected minutePicker: TimePickerItem;
    protected secondPicker: TimePickerItem;

    constructor(
        private time?: Time,
        protected showSeconds: boolean = false,
        protected isDisable?: boolean
    ) {
        if(time == null)
            this.time = time = new Time(0, 0, 0);
        this.hourPicker = new TimePickerItem(time.hours, 0, 23, isDisable);
        this.minutePicker = new TimePickerItem(time.minutes, 0, 59, isDisable);
        if(showSeconds)
            this.secondPicker = new TimePickerItem(time.seconds, 0, 59, isDisable);
    }

    @Listener(TimePickerItem.EVENT.CHANGE)
    protected onChangeItem(timePart: number, picker: TimePickerItem): void{
        let time = this.time;
        let hours = time.hours;
        let minutes = time.minutes;
        let seconds = time.seconds;
        if(picker == this.hourPicker)
            hours = timePart;
        else if(picker == this.minutePicker)
            minutes = timePart;
        else
            seconds = timePart;
        this.time = new Time(hours, minutes, seconds);
        this.fireEventOnParents(TimePicker.EVENT.CHANGE, this.time)
    }

    public setTime(time: Time): void{
        this.time = time;
        this.hourPicker.value = time.hours
        this.minutePicker.value = time.minutes
        if(this.secondPicker)
            this.secondPicker.value = time.seconds
    }
    public getTime(): Time{
        return this.time;
    }

    public setDisable(isDisable: boolean): void{
        this.isDisable = this.hourPicker.isDisable =  this.minutePicker.isDisable = isDisable;
        if(this.secondPicker)
            this.secondPicker.isDisable = isDisable
    }
}

interface TimePicker extends Component {}
export default TimePicker;