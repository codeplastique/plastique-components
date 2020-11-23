import Validable from "../state/Validable";
import Disableable from "../state/Disableable";
import Focusable from "../state/Focusable";
import Emptyable from "../state/Emptyable";

export default interface DynamicListEntry extends Validable, Disableable, Focusable, Emptyable{
}