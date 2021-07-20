import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";

@Reactive(function(this: TextMenuItem){
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Text-menu__btn" v:text="${this.text}">
</div>
`})
class TextMenuItem {
    protected readonly text: string
    protected readonly action: Function

    constructor(text: string, action: Function) {
        this.text = text;
        this.action = action;
    }

    run(): void{
        this.action();
    }
}
interface TextMenuItem extends Component{}
export default TextMenuItem;