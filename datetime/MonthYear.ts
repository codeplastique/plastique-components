import Comparable from "../state/Comparable";

export default class MonthYear implements Comparable<MonthYear>{

    readonly month: number
    readonly year: number
    /**
     * @param month from 0 to 11
     * @param year format 'yyyy'
     */
    constructor()
    constructor(date: Date)
    constructor(month: number, year: number)
    constructor(month?: number | Date, year?: number) {
        if(month == null || month instanceof Date){
            let date = month == null? new Date(): month as Date
            this.month = date.getMonth();
            this.year = date.getFullYear();
        }else {
            this.month = month
            this.year = year
        }
    }

    hasDate(date: Date): boolean{
        return date.getMonth() == this.month && date.getFullYear() == this.year;
    }

    isBefore(monthYear: MonthYear): boolean{
        return this.year < monthYear.year || (this.year == monthYear.year && this.month < monthYear.month);
    }

    toDate(date: number): Date{
        return new Date(this.year, this.month, date);
    }

    equals(monthYear: MonthYear): boolean{
        return this.month == monthYear.month && this.year == monthYear.year;
    }

    /**
     * @return -1 if this MonthYear less then arg,
     *          0 if equals
     *          1 if this MonthYear more then arg,
     * @param monthYear
     */
    compare(monthYear: MonthYear): number{
        return this.equals(monthYear)? 0: (this.isBefore(monthYear)? -1: 1)
    }

    getNextMonth(): MonthYear{
        let month = this.month
        let year = this.year
        return new MonthYear(
            month == 11? 0: month + 1,
            month == 11? year + 1: year)
    }

    getPrevMonth(): MonthYear{
        let month = this.month
        let year = this.year
        return new MonthYear(
            month == 0? 11: month - 1,
            month == 0? year - 1: year)
    }

    getDaysCount(): number {
        return new Date(this.year, this.month + 1, 0).getDate()
    }

    copyToDate(date: Date): Date{
        date.setFullYear(this.year, this.month);
        return date;
    }
}