import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";

@Reactive(function (this: DropdownOption<any>){`
<div xmlns:v="http://github.com/codeplastique/plastique" 
    class="Dropdown__item-val"
    v:classappend="${this.withState? 'Dropdown__item-val_with-state': 'Dropdown__item-val_simple'}" 
    v:text="${this.text}"></div>
`})
class DropdownOption<V> {
    public readonly value: V;
    public readonly text: string;
    private readonly withState: boolean;

    constructor(value: V, text: string, withState?: boolean) {
        this.value = value;
        this.text = text;
        this.withState = withState;
    }
}
export default DropdownOption;
interface DropdownOption<V> extends Component{}
