import Comparable from "../state/Comparable";

export default class MonthYear implements Comparable<MonthYear>{

    /**
     * @param month from 0 to 11
     * @param year format 'yyyy'
     */
    constructor(
        public month?: number,
        public year?: number
    ) {
        if(this.month == null || this.year == null){
            let current = new Date();
            this.month = current.getMonth();
            this.year = current.getFullYear();
        }
    }

    public static fromDate(date: Date): MonthYear{
        return new MonthYear(date.getMonth(), date.getFullYear())
    }

    public hasDate(date: Date): boolean{
        return date.getMonth() == this.month && date.getFullYear() == this.year;
    }

    public isBefore(monthYear: MonthYear): boolean{
        return this.year < monthYear.year || (this.year == monthYear.year && this.month < monthYear.month);
    }

    public toDate(date: number): Date{
        return new Date(this.year, this.month, date);
    }

    public equals(monthYear: MonthYear): boolean{
        return this.month == monthYear.month && this.year == monthYear.year;
    }

    /**
     * @return -1 if this MonthYear less then arg,
     *          0 if equals
     *          1 if this MonthYear more then arg,
     * @param monthYear
     */
    public compare(monthYear: MonthYear): number{
        return this.equals(monthYear)? 0: (this.isBefore(monthYear)? -1: 1)
    }

    public getNextMonth(): MonthYear{
        let month = this.month
        let year = this.year
        return new MonthYear(
            month == 11? 0: month + 1,
            month == 11? year + 1: year)
    }

    public getPrevMonth(): MonthYear{
        let month = this.month
        let year = this.year
        return new MonthYear(
            month == 0? 11: month - 1,
            month == 0? year - 1: year)
    }

    public getDaysCount(): number {
        return new Date(this.year, this.month + 1, 0).getDate()
    }

    public copyToDate(date: Date): Date{
        date.setFullYear(this.year, this.month);
        return date;
    }
}