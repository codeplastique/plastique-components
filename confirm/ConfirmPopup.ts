import Component from "@plastique/core/component/Component";
import Reactive from "@plastique/core/component/Reactive";
import Confirm from "../utils/Confirm";

@Reactive(function (this: ConfirmPopup){
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Modal Modal_center Confirm">
    <div class="Modal__content Confirm__content animate__animated animate__fadeInUp animate__faster">
        <header class="Confirm__header">
            <h5 class="m-0 text-primary" v:text="${this.title}"></h5>
            <i class="fas fa-times Confirm__close-btn" v:onclick="${this.reject()}"></i>
        </header>
        <div v:text="${this.description}"></div>
        <div class="Confirm__footer">
            <button class="btn btn-light" v:text="#{cancel}" v:onclick="${this.reject()}"></button>
            <button class="Confirm__btn btn btn-primary" 
                v:text="${this.resolveLabel}" 
                v:onclick="${this.resolve()}"></button>
        </div>
    </div>
</div>
`})
class ConfirmPopup extends Confirm<void>{
    protected readonly title: string;
    protected readonly description: string;
    protected readonly resolveLabel: string;
    constructor(title: string, description: string, resolveLabel: string) {
        super();
        this.title = title;
        this.description = description;
        this.resolveLabel = resolveLabel;
    }
}
interface ConfirmPopup extends Component{}
export default ConfirmPopup;