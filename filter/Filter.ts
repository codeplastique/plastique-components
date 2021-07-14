import Reactive from "@plastique/core/component/Reactive";
import AppEvent from "@plastique/core/event/AppEvent";
import InitEvent from "@plastique/core/event/InitEvent";
import Component from "@plastique/core/component/Component";

@Reactive
abstract class Filter<T> implements Component{
    @InitEvent public static readonly CHANGE_EVENT: AppEvent<any>

    abstract isMatch(value: T): boolean
    abstract isFilled(): boolean
    abstract clear(): void

}
export default Filter
interface Filter<T> extends Component{}