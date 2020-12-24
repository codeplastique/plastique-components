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
    public getDate(date: Date): string
    public getDate(arg: Date | number): string{
        let date = typeof arg === 'number'? new Date(arg): arg;

        let delimiter = this.dateDelimiter;
        let year = String(date.getFullYear());
        return this.get2digit(date.getDate())
            + delimiter
            + this.get2digit(date.getMonth() + 1)
            + delimiter
            + (this.yearLength == 2? year.substr(2): year)
    }

    public getTime(millis: number): string
    public getTime(date: Date): string
    public getTime(arg: Date | number): string{
        let date = typeof arg === 'number'? new Date(arg): arg;
        let delimiter = this.timeDelimiter;
        return this.get2digit(date.getHours())
            + delimiter
            + this.get2digit(date.getMinutes())
            + (this.showSeconds? delimiter + this.get2digit(date.getSeconds()): '')
    }

    public getDateTime(millis: number): string
    public getDateTime(date: Date): string
    public getDateTime(arg: Date | number): string{
        let date = typeof arg === 'number'? new Date(arg): arg;
        return this.getDate(date) +' '+ this.getTime(date);
    }
}