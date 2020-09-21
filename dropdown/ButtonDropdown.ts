import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import Dropdown from "./Dropdown";
import Jsonable from "@plastique/core/hash/Jsonable";
import App from "@plastique/core/base/App";

@Reactive(function (this: ButtonDropdown<any>){
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Button-dropdown" v:onclick="${this.open}">
    <v:slot>
        <span v:text="${this.text}"></span>
    </v:slot>
    <dropdown 
        v:component="${this.dropdown}" 
        v:classappend="${'Button-dropdown__dropdown' + (this.dropdown.isActive? ' Button-dropdown__dropdown_active': '')}"></dropdown>
</div>
`})
class ButtonDropdown<D extends Dropdown<any>> implements Jsonable{
    constructor(public dropdown: D, protected text?: string, public openAction?: Function) {
    }

    protected open(): void{
        if(this.openAction)
            this.openAction();
        this.dropdown.isActive = true;
        App.nextTick(() => this.dropdown.setFocus());
    }

    toJSON(): Object | Object[] {
        return this.dropdown.toJSON();
    }
}
export default ButtonDropdown;
interface ButtonDropdown<D extends Dropdown<any>> extends Component{}