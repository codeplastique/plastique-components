import App from "@plastique/core/base/App";
import EntryPoint from "@plastique/core/base/EntryPoint";
import Reactive from "@plastique/core/component/Reactive";
import DropdownOption from "../dropdown/DropdownOption";
import Dropdown from "../dropdown/Dropdown";
import {mount} from "@vue/test-utils";

@EntryPoint
@Reactive(function (this: A) {
`<div xmlns:v="http://github.com/codeplastique/plastique" class="Page">
    1
</div>
`})
export default class A extends App{
    constructor(elem: HTMLElement) {
        super(elem);

        //webpack-cli --config webpack.config.cjs --mode development

        let dropdown = new Dropdown([new DropdownOption(1, '1'), new DropdownOption(2, '2')])
        // @ts-ignore
        let m = this.mount(dropdown);

        dropdown.openOptions();

        App.nextTick(() => {console.log(m.html())});
    }

    private mount(comp: any): any{
        return mount(
            {
                data(){
                    return {m: comp}
                },
                template: `<component :is="m.app$.cn" v-bind:m="m"></component>`
            } as any,
            {
                //@ts-ignore
                localVue: Vue
            } as any
        );
    }
}

