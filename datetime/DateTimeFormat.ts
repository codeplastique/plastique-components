import Time from "./Time";
import Day from "./Day";
import I18n from "@plastique/core/utils/I18n";

export default class DateTimeFormatter{
    protected readonly yearLength: number

    /**
     * @param datePattern
     * dd - date
     * MM - month
     * yy / yyyy = year
     *
     * @param timePattern
     * hh - hours
     * mm - minutes
     * ss - seconds
     */
    constructor(
        protected readonly datePattern: string = 'dd/MM/yyyy',
        protected readonly timePattern: string = 'hh:mm',
    ) {
        this.yearLength = datePattern.includes('yyyy')? 4: (datePattern.includes('yy')? 2: 0)
    }

    protected get2digit(numb: number): string{
        return numb < 10? '0'+ numb: String(numb);
    }

    protected formatTime(millis: number): string
    protected formatTime(time: Time): string
    protected formatTime(date: Date): string
    protected formatTime(hours: number, minutes: number, seconds: number): string{
        return this.timePattern.replace('hh', this.get2digit(hours))
            .replace('mm', this.get2digit(minutes))
            .replace('ss', this.get2digit(seconds))
    }

    protected formatDate(millis: number): string
    protected formatDate(day: Day): string
    protected formatDate(date: Date): string
    protected formatDate(year: number, month?: number, date?: number): string
    protected formatDate(year: number | Date, month?: number, date?: number): string{
        if(year instanceof Date){
            let d = year;
            year = d.getFullYear()
            month = d.getMonth()
            date = d.getDate()
        }

        let temp = this.datePattern.replace('dd', this.get2digit(date))
            .replace('MM', this.get2digit(month + 1))
        if(this.yearLength == 2)
            temp = temp.replace('yy', year.toString().substr(2))
        else if(this.yearLength == 4)
            temp = temp.replace('yyyy', year.toString())
        return temp
    }

    protected getDateTime(date: Date): string{
        return this.formatDate(date) +' '+ this.formatTime(
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        )
    }

    format(millis: number): string
    format(date: Date): string
    format(range: [Date?, Date?] | [number?, number?], delimiter?: string, showDefaultTime?: boolean): string
    format(arg: Date | number | any[], arg2?: string, arg3?: boolean): string{
        if(Array.isArray(arg))
            return this.formatRange(arg as any, arg2, arg3)

        if(typeof arg === 'number' || arg instanceof Date){
            let date = typeof arg === 'number' ? new Date(arg) : arg;
            return this.getDateTime(date)
        }else if(arg instanceof Time){
            return this.formatTime(arg.hours, arg.minutes, arg.seconds)
        }else {
            return this.formatDate(arg.monthYear.year, arg.monthYear.month, arg.date)
        }
    }

    protected formatRange(
        range: [Date?, Date?] | [number?, number?],
        delimiter: string = ' – ',
        showDefaultTime?: boolean
    ): string{
        let dates = (range as any[]).map(d => d == null? null: (d instanceof Date? d: new Date(d)))
        let [from, till] = dates;
        let showFromTime = showDefaultTime || !this.isDefaultTime(from)
        let showTillTime = showDefaultTime || !this.isDefaultTime(till)

        if(from && till){
            let isSameDate = new Day(from).equals(new Day(till));

            if(!showFromTime && !showTillTime) {
                let fromDateString = this.formatDate(from);
                if(isSameDate)
                    return fromDateString
                return fromDateString + delimiter + this.formatDate(till)
            }else if(isSameDate){
                return this.getDateTime(from) + delimiter + this.getDateTime(till)
            }else {
                return (showFromTime? this.getDateTime(from): this.formatDate(from))
                    + delimiter
                    + (showTillTime? this.getDateTime(till): this.formatDate(till))
            }
        }else {
            if(from){
                return I18n.text('from_date', showFromTime? this.getDateTime(from): this.formatDate(from))
            }else
                return I18n.text('until_date', showTillTime? this.getDateTime(till): this.formatDate(till))
        }
    }

    protected isDefaultTime(date: Date | null): boolean{
        if(date == null)
            return false;
        return (date.getHours() == 0 && date.getMinutes() == 0)
            ||
            (date.getHours() == 23 && date.getMinutes() == 59)
    }
}