export default class DateUtils {

    // public static getWeekNumbers (month: number, year: number): number[] {
    //     let weekNumbers = [];
    //     for (let i = 1; i <= this.countDays(month, year); i++) {
    //         let weekNumber = getWeekNumber(new Date(year, month, i));
    //         if (month === 11 && weekNumber === 1) {
    //             weekNumber = weekNumbers[weekNumbers.length - 1] + 1;
    //             weekNumbers.push(weekNumber);
    //             break
    //         }
    //         weekNumbers.push(weekNumber)
    //     }
    //     return Array.from(new Set(weekNumbers))
    // }

    // public static getWeekNumber(date: Date): number {
    //     let utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    //     // Set to nearest Thursday: current date + 4 - current day number
    //     // Make Sunday's day number 7
    //     utcDate.setUTCDate(utcDate.getUTCDate() + 4 - (utcDate.getUTCDay() || 7));
    //
    //     // Calculate full weeks to nearest Thursday
    //     let yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
    //     const oneDayInMs = 86400000;
    //     return Math.ceil(((+utcDate - +yearStart) / oneDayInMs + 1) / 7)
    // }


    public static getUTCTimestamp(date: Date): number{
        return date.getTime() - (date.getTimezoneOffset() * 60 * 1000)
    }
}