export default class DateTime{
    constructor(
        private dateDelimiter: string = '/',
        private timeDelimiter: string = ':',
        private yearLength: 2 | 4 = 2,
        private showSeconds: boolean = true
    ) {}

    private get2digit(numb: number): string{
        return numb < 10? '0'+ numb: String(numb);
    }

    public getDate(date: Date): string{
        let delimiter = this.dateDelimiter;
        let year = String(date.getFullYear());
        return this.get2digit(date.getDate())
            + delimiter
            + this.get2digit(date.getMonth() + 1)
            + delimiter
            + (this.yearLength == 2? year.substr(2): year)
    }

    public getTime(date: Date): string{
        let delimiter = this.timeDelimiter;
        return this.get2digit(date.getHours())
            + delimiter
            + this.get2digit(date.getMinutes())
            + (this.showSeconds? delimiter + this.get2digit(date.getSeconds()): '')
    }

    public getDateTime(date: Date): string{
        return this.getDate(date) +' '+ this.getTime(date);
    }
}