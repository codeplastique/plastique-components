import Time from "./Time";
import Day from "./Day";
import I18n from "@plastique/core/utils/I18n";

export default class DateTimeFormatter{
    constructor(
        protected readonly dateDelimiter: string = '/',
        protected readonly timeDelimiter: string = ':',
        protected readonly yearLength: 2 | 4 = 2,
        protected readonly showSeconds: boolean = true
    ) {}

    private get2digit(numb: number): string{
        return numb < 10? '0'+ numb: String(numb);
    }

    public getDate(millis: number): string
    public getDate(day: Day): string
    public getDate(date: Date): string
    public getDate(arg: Date | number | Day): string{
        let year: string, month: number, date: number;
        if(arg instanceof Day){
            year = String(arg.monthYear.year);
            month = arg.monthYear.month;
            date = arg.date;
        }else {
            let dateObj = typeof arg === 'number' ? new Date(arg) : arg;
            year = String(dateObj.getFullYear());
            month = dateObj.getMonth();
            date = dateObj.getDate();
        }

        let delimiter = this.dateDelimiter;
        return this.get2digit(date)
            + delimiter
            + this.get2digit(month + 1)
            + delimiter
            + (this.yearLength == 2? year.substr(2): year)
    }

    public getTime(millis: number): string
    public getTime(time: Time): string
    public getTime(date: Date): string
    public getTime(arg: Date | number | Time): string{
        let hours: number, minutes: number, seconds: number;
        if(arg instanceof Time){
            hours = arg.hours;
            minutes = arg.minutes;
            seconds = arg.seconds;
        }else {
            let date = typeof arg === 'number'? new Date(arg): arg;
            hours = date.getHours();
            minutes = date.getMinutes();
            seconds = date.getSeconds();
        }
        let delimiter = this.timeDelimiter;
        return this.get2digit(hours)
            + delimiter
            + this.get2digit(minutes)
            + (this.showSeconds? delimiter + this.get2digit(seconds): '')
    }

    public getDateTime(millis: number): string
    public getDateTime(date: Date): string
    public getDateTime(arg: Date | number): string{
        let date = typeof arg === 'number'? new Date(arg): arg;
        return this.getDate(date) +' '+ this.getTime(date);
    }

    public getDateTimeRange(
        range: [Date?, Date?] | [number?, number?],
        delimiter: string = ' – ',
        showDefaultTime?: boolean
    ): string{

        let dates = (range as any[]).map(d => d == null? null: (d instanceof Date? d: new Date(d)))
        let [from, till] = dates;
        let isDefaultFromTime = !showDefaultTime && this.isDefaultTime(from)
        let isDefaultTillTime = !showDefaultTime && this.isDefaultTime(till)

        if(from && till){
            let isSameDate = new Day(from).equals(new Day(till));

            if(isDefaultFromTime && isDefaultTillTime) {
                let fromDateString = this.getDate(from);
                if(isSameDate)
                    return fromDateString
                return fromDateString + delimiter + this.getDate(till)
            }else if(isSameDate){
                return this.getDateTime(from) + delimiter + this.getDateTime(till)
            }else {
                return (isDefaultFromTime? this.getDate(from): this.getDateTime(from))
                    + delimiter
                    + (isDefaultTillTime? this.getDate(till): this.getDateTime(till))
            }
        }else {
            if(from){
                return I18n.text('from_date', isDefaultFromTime? this.getDate(from): this.getDateTime(from))
            }else
                return I18n.text('until_date', isDefaultTillTime? this.getDate(till): this.getDateTime(till))
        }
    }

    protected isDefaultTime(date: Date): boolean{
        if(date == null)
            return false;
        return (date.getHours() == 0 && date.getMinutes() == 0)
            ||
            (date.getHours() == 23 && date.getMinutes() == 59)
    }

    p
}