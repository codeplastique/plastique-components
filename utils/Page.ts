import {TypeDef} from "plastique/base/Type";

export default class Page{
    /**
     * @return remove listener action
     */
    public static waitGlobalClick(listener: (event: Event) => any, ignoredComponent?: TypeDef<any>): () => void{
        return this.addSingleEventListener('mousedown', listener, ignoredComponent)
    }

    /**
     * @return remove listener action
     */
    public static addSingleEventListener(eventName: string, listener: (event: Event) => any, ignoredComponent?: TypeDef<any>): () => void {
        let removeListenerAction = () => document.removeEventListener(eventName, listenerWrapper)
        let listenerWrapper = (event: Event) => {
            if(ignoredComponent == null || event.getClosestComponent([ignoredComponent]).get() == null){
                document.removeEventListener(eventName, listenerWrapper);
                removeListenerAction();
                listener(event);
            }
        };
        document.addEventListener(eventName, listenerWrapper)
        return removeListenerAction;
    };
}
