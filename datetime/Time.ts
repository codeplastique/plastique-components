import Comparable from "../state/Comparable";

export default class Time implements Comparable<Time>{
    public readonly hours: number;
    public readonly minutes: number
    public readonly seconds: number;

    constructor(hours?: number, minutes?: number, seconds?: number) {
        this.hours = hours || 0;
        this.minutes = minutes || 0;
        this.seconds = seconds || 0;
    }

    public static fromDate(date: Date): Time {
        return new Time(
            date.getHours(),
            date.getMinutes(),
            date.getSeconds());
    }

    public copyToDate(date: Date): Date{
        date.setHours(this.hours, this.minutes, this.seconds);
        return date;
    }

    public equals(time: Time): boolean{
        return time.hours == this.hours
            && time.minutes == this.minutes
            && time.seconds == this.seconds;
    }

    public isBefore(time: Time): boolean{
        return this.hours < time.hours
            || (this.hours == time.hours && this.minutes < time.minutes)
            || (this.hours == time.hours && this.minutes == time.minutes && this.seconds < time.seconds)
    }

    /**
     * add or subtract time
     * all arguments can be positive or negative
     */
    public appendTime(hours: number, minutes: number, seconds: number): Time{
        let temp = new Date();
        temp.setHours(this.hours + hours, this.minutes + minutes, this.seconds + seconds);
        return Time.fromDate(temp);
    }

    public toSeconds(): number{
        return this.seconds + (this.hours * 60 + this.minutes) * 60
    }

    public compare(arg: Time): number {
        return this.equals(arg)? 0: (this.isBefore(arg)? -1: 1)
    }
}