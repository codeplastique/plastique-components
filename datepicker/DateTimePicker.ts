import Component from "@plastique/core/component/Component";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import Listener from "@plastique/core/event/Listener";
import Reactive from "@plastique/core/component/Reactive";
import MonthYear from "plastique-components/datetime/MonthYear";
import Time from "plastique-components/datetime/Time";

@Reactive(function (this: DateTimePicker) {
let day: number, dayName: string;
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Date-time-picker">
    <div class="Date-time-picker__date-picker">
        
        <div class="Date-picker No-select">
            <header class="Date-picker__header">
                <div class="Date-picker__move-btn fas fa-chevron-circle-left"
                  v:onclick="${this.setPrevMonth}"></div>
                <div v:text="${this.monthName +' '+ this.monthYear.year}"></div>
                <div class="Date-picker__move-btn fas fa-chevron-circle-right"
                    v:onclick="${this.setNextMonth}"></div>
            </header>
            <div class="Date-picker__month">
                <div class="Date-picker__days-names">
                  <span class="Date-picker__day-name"
                    v:each="dayName: ${this.daysNames}"
                    v:text="${dayName}"></span>
                </div>
                
                <div class="Date-picker__days">
                    <span class="Date-picker__day"
                        v:each="day: ${this.days}"
                        v:classappend="${this.isSelectDay(day)? 'Date-picker__day_selected': ''} 
                            + ${day == 1? ' Date-picker__day_offset-'+ this.getFirstDayOffset(): ''} 
                            + ${this.isToday(day)? ' Date-picker__day_today': ''}"
                        v:text="${day}"
                        v:onclick="${this.selectDay(day)}">
                    </span>
                </div>
            </div>
        </div>
        
    </div>
    <div class="Date-time-picker__time" v:classappend="${this.isActive()? 'Date-time-picker_time_active': ''}">
        <i class="fas fa-clock Date-time-picker__time-icon"></i>
        <div v:component="${this.timePicker}"></div>
    </div>
</div>`})
class DateTimePicker extends DatePicker{
    private readonly timePicker: TimePicker;

    protected isActive(): boolean{
        return this.selectedDates.length > 0
    }

    constructor(selectedDates: Date[] = [],
                removeByRepeatedClick: boolean = true,
                isFromMonday?: boolean,
                defaultMonthYear?: MonthYear) {
        super(selectedDates, removeByRepeatedClick, isFromMonday, defaultMonthYear);
        let isActive = selectedDates.length > 0;
        this.timePicker = new TimePicker(
            isActive? new Time(selectedDates[0]): new Time(),
            !isActive
        )
    }

    protected trySetDateAndNotify(date: Date): Promise<void>{
        return super.trySetDateAndNotify(date).then(() => {
            let isActive = this.selectedDates.length > 0;
            this.timePicker.setDisable(!isActive)
            if(isActive)
                this.timePicker.setTime(new Time(date));
        })
    }

    @Listener(TimePicker.EVENT.CHANGE)
    private onChangeTime(time: Time): void{
        let lastDate = new Date( +this.selectedDates[this.selectedDates.length - 1] );
        time.copyToDate(lastDate);
        this.trySetDateAndNotify(lastDate)
    }

}

export default DateTimePicker;
interface DateTimePicker extends Component {}
