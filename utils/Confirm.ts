export default class Confirm<T>{
    protected readonly promise: Promise<T>
    protected resolve: (arg?: T) => void
    protected reject: (arg?: T) => void
    protected readonly resolvePromise: Promise<T>


    constructor(resolveAction?: () => Promise<any>) {
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        })
        if(resolveAction){
            let resolve: (arg?: any) => void
            let reject: (arg?: any) => void

            this.resolvePromise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            })
            this.promise.then(
                () => resolveAction().then(resolve, reject),
                () => reject()
            )
        }
    }
    public wait(): Promise<T>{
        return this.promise;
    }

    /**
     * waits for the resolveAction to be completed
     */
    public waitResolving(): Promise<T>{
        return this.resolvePromise? this.resolvePromise: this.promise;
    }
}