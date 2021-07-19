import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import TextMenu from "./TextMenu";
import Listener from "@plastique/core/event/Listener";
import Types from "@plastique/core/base/Types";

@Reactive(function (this: TextMenuBtn){
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Text-menu-btn">
    <div v:onclick.stop="${this.toggleMenu}">
        <v:slot/>
    </div>
    <munu v:classappend="'Text-menu-btn__menu'" v:component="${this.textMenu}" v:if="${this.textMenu}"></munu>
</div>
`})
class TextMenuBtn{
    private textMenu: TextMenu | null
    private readonly textMenuProducer: TextMenu | (() => TextMenu)

    constructor(textMenu: TextMenu | (() => TextMenu)) {
        this.textMenuProducer = textMenu
    }

    @Listener(TextMenu.CLOSE_EVENT)
    toggleMenu(): void{
        if(this.textMenu) {
            this.textMenu = null;
        }else {
            let producer = this.textMenuProducer
            this.textMenu = Types.isFunction(producer)? producer(): producer
        }
    }
}
export default TextMenuBtn
interface TextMenuBtn extends Component{}