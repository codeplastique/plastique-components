export default class Confirm<T>{
    readonly resolve: (arg?: T) => void
    readonly reject: (arg?: T) => void
    protected readonly promise: Promise<T>
    protected readonly resolvePromise: Promise<T>

    constructor(resolveAction?: () => Promise<any>) {
        this.promise = new Promise((res, rej) => {
            ///@ts-ignore
            this.resolve = res;
            ///@ts-ignore
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

    /**
     * waits for resolve/reject action only
     */
    wait(): Promise<T>{
        return this.promise;
    }

    /**
     * waits for the resolve action and the following actions (if exists) are performed
     */
    waitResolving(): Promise<T>{
        return this.resolvePromise? this.resolvePromise: this.promise;
    }
}