import MonthYear from "./MonthYear";
import Comparable from "../state/Comparable";

export default class Day implements Comparable<Day>{
    public readonly date: number;
    public readonly monthYear: MonthYear;

    constructor(date: Date)
    constructor(date: number, monthYear: MonthYear)
    constructor(date: number, month: number, year: number)
    constructor(date: number | Date, month?: number | MonthYear, year?: number) {
        if(date instanceof Date){
            this.date = date.getDate();
            this.monthYear = MonthYear.fromDate(date);
        }else if(month instanceof MonthYear){
            this.date = date;
            this.monthYear = month;
        }else {
            this.date = date;
            this.monthYear = new MonthYear(month, year);
        }
    }

    public isBefore(day: Day | Date): boolean{
        if(day instanceof Date)
            day = new Day(day);
        let monthCompareFactor = this.monthYear.compare(day.monthYear);
        return monthCompareFactor < 0 || (monthCompareFactor == 0 && this.date < day.date)
    }

    public equals(day: Day): boolean{
        return this.date == day.date && this.monthYear.equals(day.monthYear);
    }

    public copyToDate(date: Date): Date{
        this.monthYear.copyToDate(date).setDate(this.date)
        return date;
    }

    public compare(arg: Day): number {
        return this.equals(arg)? 0: (this.isBefore(arg)? -1: 1)
    }
}