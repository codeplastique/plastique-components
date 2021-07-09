import Comparable from "../state/Comparable";

export default class Time implements Comparable<Time>{
    public readonly hours: number;
    public readonly minutes: number
    public readonly seconds: number;

    constructor(date: Date)
    constructor(hours?: number, minutes?: number, seconds?: number)
    constructor(hours?: number | Date, minutes?: number, seconds?: number) {
        if(hours instanceof Date){
            let date = hours
            this.hours = date.getHours();
            this.minutes = date.getMinutes();
            this.seconds = date.getSeconds();
        }else {
            this.hours = hours || 0;
            this.minutes = minutes || 0;
            this.seconds = seconds || 0;
        }
    }

    copyToDate(date: Date): Date{
        date.setHours(this.hours, this.minutes, this.seconds);
        return date;
    }

    equals(time: Time): boolean{
        return time.hours == this.hours
            && time.minutes == this.minutes
            && time.seconds == this.seconds;
    }

    isBefore(time: Time): boolean{
        return this.hours < time.hours
            || (this.hours == time.hours && this.minutes < time.minutes)
            || (this.hours == time.hours && this.minutes == time.minutes && this.seconds < time.seconds)
    }

    /**
     * add or subtract time
     * all arguments may be positive or negative
     */
    appendTime(hours: number, minutes: number, seconds: number): Time{
        let temp = new Date();
        temp.setHours(this.hours + hours, this.minutes + minutes, this.seconds + seconds);
        return new Time(temp);
    }

    toSeconds(): number{
        return this.seconds + (this.hours * 60 + this.minutes) * 60
    }

    compare(arg: Time): number {
        return this.equals(arg)? 0: (this.isBefore(arg)? -1: 1)
    }
}