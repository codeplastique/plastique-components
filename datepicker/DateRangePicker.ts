import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import Listener from "@plastique/core/event/Listener";
import Jsonable from "@plastique/core/hash/Jsonable";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import DateTimeFormatter from "plastique-components/datetime/DateTimeFormatter";
import MonthYear from "plastique-components/datetime/MonthYear";
import Time from "plastique-components/datetime/Time";
import DateUtils from "plastique-components/datetime/DateUtils";

@Reactive(function (this: DateRangePicker) {`
<div xmlns:v="http://github.com/codeplastique/plastique" class="Date-picker-modal">

    <div class="Date-picker-modal__pickers">
        <div class="Date-picker-modal__picker Date-time-picker" v:onmouseenter="${this.onPickerHover(this.fromDatePicker)}">
            <from v:component="${this.fromDatePicker}" v:classappend="${this.getPickerStyleClass(this.fromDatePicker)}"></from>
            <div class="Date-time-picker__time" v:classappend="${this.fromDate? 'Date-time-picker__time_active': ''}">
                <i class="fas fa-clock Date-time-picker__time-icon"></i>
                <div v:component="${this.fromTimePicker}"></div>
            </div>
        </div>
        <div class="Date-picker-modal__picker Date-time-picker" v:onmouseenter="${this.onPickerHover(this.tillDatePicker)}">
            <till v:component="${this.tillDatePicker}" v:classappend="${this.getPickerStyleClass(this.tillDatePicker)}"></till>
            <div class="Date-time-picker__time" v:classappend="${this.tillDate? 'Date-time-picker__time_active': ''}">
                <i class="fas fa-clock Date-time-picker__time-icon"></i>
                <div v:component="${this.tillTimePicker}"></div>
            </div>
        </div>
    </div>
<!--        <div class="Date-range-picker__footer">-->
<!--            <a tabindex="0" class="text-secondary" v:text="#{cancel}" v:onclick="{this.close}"></a>-->
<!--            <a tabindex="0" class="text-primary" v:text="#{select}" v:onclick="{this.close}"></a>-->
<!--        </div>-->
    </div>
`})
class DateRangePicker implements Jsonable{
    @InitEvent public static readonly SELECT_DATE_RANGE_EVENT: AppEvent<[Date, Date] | null>;

    public fromDate: Date;
    public tillDate: Date;
    protected fromDatePicker: DatePicker;
    protected tillDatePicker: DatePicker;

    protected fromTimePicker: TimePicker;
    protected tillTimePicker: TimePicker;
    protected readonly dateTime: DateTimeFormatter;
    public stringValue: string

    constructor(
        range: [Date, Date] = [] as any,
        hideSeconds?: boolean
    ){
        this.dateTime = new DateTimeFormatter();
        this.setRange(range[0], range[1]);
        this.stringValue = this.getStringValue();
        this.init(hideSeconds);
    }

    public setRange(from: Date, till: Date): void{
        this.fromDate = from;
        this.tillDate = till;
    }

    public getRange(): [Date, Date]{
        return [this.fromDate, this.tillDate]
    }

    //UNSAFE //TODO
    private getPickerStyleClass(picker: DatePicker): string{
        if(picker == null || this.fromDate == null)
            return '';

        let fromDateCompareFactor = new MonthYear(this.fromDate).compare(picker.monthYear);

        if(this.tillDate){
            let tillDateCompareFactor = new MonthYear(this.tillDate).compare(picker.monthYear);
            if((fromDateCompareFactor < 0 && tillDateCompareFactor < 0)
                || (fromDateCompareFactor > 0 && tillDateCompareFactor > 0)
                || (fromDateCompareFactor == 0 && tillDateCompareFactor == 0 && this.tillDate.getDate() == this.fromDate.getDate()))
                return '';
        }

        let style;
        if(fromDateCompareFactor < 0)
            style = 'Date-picker_range-to';
        else if(fromDateCompareFactor > 0)
            style = 'Date-picker_range-from';
        else
            style = 'Date-picker_range';

        this.onPickerHover(picker);
        return this.tillDate == null? style +'-incomplete': style
    }

    //UNSAFE //TODO
    private onPickerHover(picker: DatePicker): void{
        if(picker == null || this.fromDate == null || this.tillDate != null)
            return;

        // this.hoverPicker = picker;

        let secondPicker = picker == this.fromDatePicker? this.tillDatePicker: this.fromDatePicker;
        let fromDateCompareFactor = new MonthYear(this.fromDate).compare(picker.monthYear)
        let secondPickerCompareFactor = secondPicker.monthYear.compare(picker.monthYear)

        const fromClass = 'Date-picker_range-from-temp';
        const tillClass = 'Date-picker_range-to-temp';
        if(fromDateCompareFactor == 0){
            picker.getElement().classList.remove(fromClass, tillClass)
        }

        if(fromDateCompareFactor < 0 && secondPickerCompareFactor < 0) {
            secondPicker.getElement().classList.add(fromClass)
            secondPicker.getElement().classList.remove(tillClass)
        }else if(fromDateCompareFactor > 0 && secondPickerCompareFactor > 0) {
            secondPicker.getElement().classList.add(tillClass)
            secondPicker.getElement().classList.remove(fromClass)
        }
    }


    @Listener(DatePicker.EVENT.SELECT_DATE)
    private selectDate(date: Date): void{
        if(this.fromDate == null){
            this.fromDate = date;
            this.fromTimePicker.setDisable(false);
        }else {
            if(this.fromDate > date){
                this.tillDate = this.fromDate;
                this.fromDate = date;
            }else
                this.tillDate = date;

            if(new Time(this.tillDate).equals(new Time()))
                new Time(23, 59, 59).copyToDate(this.tillDate)

            this.tillTimePicker.setDisable(false);
        }
        this.stringValue = this.getStringValue();
        this.notify();
    }

    @Listener(TimePicker.EVENT.CHANGE)
    private setTime(time: Time, picker: TimePicker): void{
        time.copyToDate(picker == this.fromTimePicker? this.fromDate: this.tillDate);
        this.stringValue = this.getStringValue();
        this.notify();
    }

    @Listener(DatePicker.EVENT.BEFORE_SELECT_DATE)
    private filterDate(): Promise<void>{
        if(this.fromDate && this.tillDate){
            this.clear()
        }
        return Promise.resolve();
    }

    @Listener(DatePicker.EVENT.CHANGE_MONTH)
    private changeMonth(monthYear: MonthYear, picker: DatePicker): void{
        let fromPicker = this.fromDatePicker;
        let tillPicker = this.tillDatePicker;

        let secondPicker = picker == fromPicker? tillPicker: fromPicker;
        if(secondPicker.monthYear.equals(monthYear)){
            if(picker == fromPicker)
                tillPicker.setNextMonth();
            else
                fromPicker.setPrevMonth();
        }
        fromPicker.setSelectedDates(this.getSelectedDays(fromPicker.monthYear));
        tillPicker.setSelectedDates(this.getSelectedDays(tillPicker.monthYear));
    }

    private getSelectedDays(monthYear: MonthYear): Date[]{
        return [this.fromDate, this.tillDate].filter(date => date && monthYear.hasDate(date));
    }

    protected getStringValue(): string{
        if(!(this.fromDate || this.tillDate))
            return '';
        let from = this.getDateString(this.fromDate, new Time());
        let till = this.getDateString(this.tillDate, new Time(23, 59, 59));
        return from == till? from: (from +' - '+ till);
    }

    private getDateString(date: Date, ignoreTime: Time): string{
        if(date == null)
            return '';
        let hasTime = !new Time(date).equals(ignoreTime);
        return hasTime? this.dateTime.getDateTime(date): this.dateTime.getDate(date)
    }

    private init(hideSeconds?: boolean): void{
        let from = this.fromDate;
        let till = this.tillDate;
        let fromRange: Date[],
            tillRange: Date[],
            tillDefaultMonthYear: MonthYear;

        if(from && till){
            fromRange = from.getMonth() == till.getMonth() && from.getFullYear() == till.getFullYear()? [from, till]: [from];
            tillRange = fromRange.length == 2? []: [till];
            if(fromRange.length == 2){
                tillDefaultMonthYear = new MonthYear(from).getNextMonth();
            }
        }else {
            fromRange = [];
            tillRange = [];
            tillDefaultMonthYear = new MonthYear().getNextMonth();
        }

        this.fromDatePicker = new DatePicker(fromRange, false, true);
        this.tillDatePicker = new DatePicker(tillRange, false, true, tillDefaultMonthYear);

        this.fromTimePicker = new TimePicker(from? new Time(from): new Time(), !hideSeconds, this.fromDate == null)
        this.tillTimePicker = new TimePicker(till? new Time(till): new Time(23, 59, 59), !hideSeconds, till == null);
    }

    // private handleClick = function(event: Event): void{
    //     if(event.getClosestComponent([DateRangePicker]).get() != this)
    //         this.close();
    // }.bind(this);

    // public close(): void{
        // if(!this.isActive)
        //     return;

        // this.isActive = false;
        // document.removeEventListener('click', this.handleClick);
    //     this.fromDatePicker = this.tillDatePicker = null;
    //     if(this.fromDate != null){
    //         if(this.tillDate == null){
    //             this.fromDate = null;
    //             this.stringValue = this.getStringValue()
    //             return;
    //         }
    //         this.notify()
    //     }
    // }

    protected notify(): void{
        this.fireEventOnParents(DateRangePicker.SELECT_DATE_RANGE_EVENT, [this.fromDate, this.tillDate])
    }

    public clear(): void{
        // if(this.isActive) {
            this.fromDatePicker.removeSelectedDates();
            this.tillDatePicker.removeSelectedDates();
            this.clearTimePicker(this.fromTimePicker, new Time())
            this.clearTimePicker(this.tillTimePicker, new Time(23, 59, 59))
        // }
        this.fromDate = null;
        this.tillDate = null;
        this.stringValue = this.getStringValue();
    }

    private clearTimePicker(timePicker: TimePicker, time: Time): void{
        timePicker.setTime(time);
        timePicker.setDisable(true);
    }

    /**
     * @return utc unix timestamp cortege or null
     */
    public toJSON(): Object | Object[] {
        return this.tillDate? [
            ~~(DateUtils.getUTCTimestamp(this.fromDate) / 1000),
            ~~(DateUtils.getUTCTimestamp(this.tillDate) / 1000)
        ]: null
    }

}

export default DateRangePicker;
interface DateRangePicker extends Component {}
