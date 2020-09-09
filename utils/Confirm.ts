export default class Confirm<T>{
    protected readonly promise: Promise<T>
    protected resolve: (arg?: T) => void
    protected reject: (arg?: T) => void
    constructor() {
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        })
    }
    public wait(): Promise<T>{
        return this.promise;
    }
}