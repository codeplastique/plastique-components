import Validable from "../state/Validable";
import Disableable from "../state/Disableable";

export default interface DynamicListEntry extends Validable, Disableable{
    isEmpty(): boolean
    focus(): void
}