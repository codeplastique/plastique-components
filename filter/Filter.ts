import Reactive from "@plastique/core/component/Reactive";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import Component from "@plastique/core/component/Component";
import Disableable from "../state/Disableable";

@Reactive
abstract class Filter<T> implements Component, Disableable{
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<any>

    /**
     * Checks the specific object for a validation
     * @return true if the object is valid, false otherwise
     */
    abstract isMatch(value: T): boolean
    abstract isFilled(): boolean

    /**
     * Clears an entered value
     */
    abstract clear(): void

    abstract isDisabled(): boolean
    abstract setDisabled(isDisabled: boolean): void
}
export default Filter
interface Filter<T> extends Component{}