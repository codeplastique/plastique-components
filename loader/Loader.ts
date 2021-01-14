import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";

@Reactive(function (this: Loader) {
`<div xmlns:v="http://github.com/codeplastique/plastique"
    class="Loader" 
    v:classappend="${this.loading? 'Loader_active': ''}">
    <div class="Loader__inner"></div>
</div>`})
class Loader {
    constructor(protected loading?: boolean) {}

    public setLoading(isLoading?: boolean): void{
        this.loading = isLoading;
    }
    public isLoading(): boolean{
        return this.loading;
    }
}
interface Loader extends Component{}
export default Loader;