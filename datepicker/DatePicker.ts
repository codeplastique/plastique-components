import Component from "@plastique/core/component/Component";
import I18n from "@plastique/core/utils/I18n";
import Reactive from "@plastique/core/component/Reactive";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import MonthYear from "plastique-components/datetime/MonthYear";

@Reactive(function(this: DatePicker){
let day: number, dayName: string;
`<div class="Date-picker No-select" xmlns:v="http://github.com/codeplastique/plastique">
    
    <header class="Date-picker__header">
        <div class="Date-picker__move-btn fas fa-chevron-circle-left" 
            v:onclick="${this.setPrevMonth}" 
            v:if="${!this.isDisableMoving}"></div>
            
        <div class="Date-picker__month-name" v:text="${this.monthName +' '+ this.monthYear.year}"></div>
        
        <div class="Date-picker__move-btn fas fa-chevron-circle-right" 
            v:onclick="${this.setNextMonth}" 
            v:if="${!this.isDisableMoving}"></div>
    </header>
   
    <div class="Date-picker__month">
<!--      <div-->
<!--        v-if="showWeeksNumber"-->
<!--        class="vl-calendar-month__week-numbers-column"-->
<!--      >-->
<!--        <div-->
<!--          v-for="number in weekNumbers"-->
<!--          class="vl-calendar-month__week-number"-->
<!--          :key="number"-->
<!--        >-->
<!--          {{ number }}-->
<!--        </div>-->
<!--      </div>-->
    
<!--        <div>-->
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
                    v:data-day="${day}"
                    v:data-month="${this.monthYear.month}"
                    v:data-year="${this.monthYear.year}"
                    v:text="${day}"
                    v:onclick="${this.selectDay(day)}">
                </span>
            </div>
<!--        </div>-->
    </div>
</div>
`})
class DatePicker{
    @InitEvent public static readonly EVENT: {
        BEFORE_SELECT_DATE: AppEvent<Date>
        SELECT_DATE: AppEvent<Date | null>,
        REMOVE_DATE: AppEvent<Date>,
        CHANGE_MONTH: AppEvent<MonthYear>
    };

    public monthYear: MonthYear;
    protected selectedDates: Date[];
    protected monthName: string;
    protected days: number[];

    protected readonly daysNames: string[];
    protected readonly daysOffset: number;

    constructor(
        selectedDates: Date[] = [],
        protected removeByRepeatedClick: boolean = true,
        isFromMonday?: boolean,
        defaultMonthYear?: MonthYear,
        private isDisableMoving?: boolean
    ){
        this.selectedDates = selectedDates;
        this.daysOffset = isFromMonday? 1: 0;
        this.daysNames = [0, 1, 2, 3, 4, 5, 6].map((e, i) => I18n.text('day_short_'+ i));
        if(isFromMonday) {
            let sunday = this.daysNames.shift();
            this.daysNames.push(sunday);
        }
        if(selectedDates.length == 0) {
            if (!defaultMonthYear) {
                defaultMonthYear = new MonthYear();
            }
        }else {
            defaultMonthYear = new MonthYear(selectedDates[0])
        }
        this.initMonth(defaultMonthYear);
    }

    public getSelectedDates(): Date[]{
        return this.selectedDates;
    }

    public setSelectedDates(dates: Date[]): void{
        this.selectedDates = dates;
    }

    private createRange(from: number, till: number): number[]{
        let range = [];
        for (let i = from; i < till + 1; i++) range.push(i);
        return range;
    }

    private initMonth(monthYear: MonthYear): void{
        this.monthYear = monthYear;
        this.monthName = I18n.text('month_'+ monthYear.month);
        this.days = this.createRange(1, this.monthYear.getDaysCount())
    }

    private initMonthNotify(monthYear: MonthYear): void{
        this.initMonth(monthYear);
        this.fireEventOnParents(DatePicker.EVENT.CHANGE_MONTH, monthYear)
    }

    protected selectDay(day: number): void{
        if(this.removeByRepeatedClick) {
            let index = this.getSelectedDayIndex(day);
            if (index >= 0) {
                let date = this.selectedDates[index];
                this.selectedDates.remove(index);
                this.fireEventOnParents(DatePicker.EVENT.REMOVE_DATE, date);
                return;
            }
        }
        this.trySetDateAndNotify(this.monthYear.toDate(day));
    }

    protected trySetDateAndNotify(date: Date): Promise<void>{
        return this.fireEventOnParents(DatePicker.EVENT.BEFORE_SELECT_DATE, date).then(() => {
            this.selectedDates.push(date);
            this.fireEventOnParents(DatePicker.EVENT.SELECT_DATE, date);
        });
    }

    public removeSelectedDates(): void {
        this.selectedDates = [];
    }

    public setPrevMonth(): void{
        return this.initMonthNotify(this.monthYear.getPrevMonth())
    }
    public setNextMonth(): void{
        this.initMonthNotify(this.monthYear.getNextMonth());
    }


    protected isSelectDay(day: number): boolean{
        return this.getSelectedDayIndex(day) >= 0
    }

    protected getSelectedDayIndex(day: number): number{
        let dates = this.selectedDates;

        for (let i = 0; i < dates.length; i++) {
            let selected = dates[i];
            if(selected.getDate() == day && this.monthYear.hasDate(selected)){
                return i
            }
        }
        return -1;
    }

    protected getFirstDayOffset(): number{
        return (this.monthYear.toDate(1).getDay() + 7 - this.daysOffset) % 7;
    }

    protected isToday(day: number): boolean{
        let now = new Date();
        return now.getDate() == day &&  this.monthYear.hasDate(now)
    }
    // public getDate (day) {
    //     return formatDate(day, this.month, this.year)
    // }
    // public calculateClasses (day) {
    //     const classes = [];
    //     if (day === 1) {
    //         let offset = (new Date(this.year, this.month, 1).getDay() + 7 - this.daysOffset) % 7;
    //         if (offset > 0) {
    //             classes.push(`vl-calendar-month__day--offset-${offset}`)
    //         }
    //     }
    //     const date = this.getDate(day);
    //     if (this.isSelected && this.isSelected(date)) {
    //         classes.push('selected')
    //         if (!this.isSelected(this.getDate(day - 1))){
    //             classes.push('selected--first')
    //         }
    //         if (!this.isSelected(this.getDate(day + 1))){
    //             classes.push('selected--last')
    //         }
    //     }
    //     // if (this.isDisabled && this.isDisabled(date)) {
    //     //     classes.push('disabled')
    //     //     if (!this.isDisabled(this.getDate(day - 1))){
    //     //         classes.push('disabled--first')
    //     //     }
    //     //     if (!this.isDisabled(this.getDate(day + 1))){
    //     //         classes.push('disabled--last')
    //     //     }
    //     // }
    //     // Object.keys(this.customClasses || {}).forEach(cl => {
    //     //     const fn = this.customClasses[cl]
    //     //     if (fn(date)) {
    //     //         classes.push(cl)
    //     //     }
    //     // });
    //     return classes
    // }


}
interface DatePicker extends Component{}
export default DatePicker;