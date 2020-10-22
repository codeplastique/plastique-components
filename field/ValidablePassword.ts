import Reactive from "@plastique/core/component/Reactive";
import ValidableField from "./ValidableField";

@Reactive(function (this: ValidablePassword){
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Validable-suffix">
    <v:parent v:classappend="'Validable-field_with-btn'"/>
    <i 
        class="fas Validable-suffix__btn" 
        v:classappend="${this.inputType == 'text'? 'fa-eye-slash Validable-suffix__btn_visible': 'fa-eye'}" 
        v:onclick="${this.togglePasswordVisible()}"></i>
</div>
`})
export default class ValidablePassword extends ValidableField{
    public togglePasswordVisible(): void{
        this.setInputType(this.inputType == 'text'? 'password': 'text')
    }

    public setPasswordType(): void{
        this.setInputType('password');
    }
}