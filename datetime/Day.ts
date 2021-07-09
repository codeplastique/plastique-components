import MonthYear from "./MonthYear";
import Comparable from "../state/Comparable";
import Time from "./Time";

export default class Day implements Comparable<Day>{
    readonly date: number;
    readonly monthYear: MonthYear;

    constructor(date: Date)
    constructor(date: number, monthYear: MonthYear)
    constructor(date: number, month: number, year: number)
    constructor(date: number | Date, month?: number | MonthYear, year?: number) {
        if(date instanceof Date){
            this.date = date.getDate();
            this.monthYear = new MonthYear(date);
        }else if(month instanceof MonthYear){
            this.date = date;
            this.monthYear = month;
        }else {
            this.date = date;
            this.monthYear = new MonthYear(month, year);
        }
    }

    isBefore(day: Day | Date): boolean{
        if(day instanceof Date)
            day = new Day(day);
        let monthCompareFactor = this.monthYear.compare(day.monthYear);
        return monthCompareFactor < 0 || (monthCompareFactor == 0 && this.date < day.date)
    }

    equals(day: Day): boolean{
        return this.date == day.date && this.monthYear.equals(day.monthYear);
    }

    copyToDate(date: Date): Date{
        this.monthYear.copyToDate(date).setDate(this.date)
        return date;
    }

    toDate(time?: Time): Date{
        let date = this.monthYear.toDate(this.date)
        if(time)
            time.copyToDate(date)
        return date
    }

    compare(arg: Day): number {
        return this.equals(arg)? 0: (this.isBefore(arg)? -1: 1)
    }
}