import Component from "@plastique/core/component/Component";
import Jsonable from "@plastique/core/hash/Jsonable";
import Reactive from "@plastique/core/component/Reactive";
import DateRangePicker from "./DateRangePicker";
import BindThis from "@plastique/core/utils/BindThis";
import Inject from "@plastique/core/component/Inject";
import CssUtils from "plastique-components/utils/CssUtils";
import DateUtils from "plastique-components/datetime/DateUtils";
import Disableable from "../state/Disableable";

@Reactive(function(this: DateRangePickerModal){
`<div xmlns:v="http://github.com/codeplastique/plastique" 
    class="Date-range-picker Date-range-picker_left-side"
    v:onkeyup.esc="${this.close}">
    
    <i class="Date-range-picker__close-btn fas fa-times" v:if="${this.range.length > 0}" v:onclick="${this.clearNotify}"></i>
    <input class="Date-range-picker__input form-control"
           readonly="readonly"
           autocomplete="off"
           v:ref="${this.inputElem}"
           v:value="${this.getValueString()}"
           v:onclick="${this.open}"
           v:disabled="${this.disabled}"
    />
            
    <modal v:if="${this.isSelfModalContainer && this.picker}" v:component="${this.picker}" v:classappend="'Date-range-picker__popup'"></modal>
</div>`})
class DateRangePickerModal implements Jsonable, Disableable{
    @Inject private readonly inputElem: HTMLElement;
    private static readonly MODAL_WIDTH_REM = 32.9;
    public disabled: boolean;

    protected range: [Date, Date];
    // public tillDate: Date;
    private stringValue: string = ''

    private picker: DateRangePicker

    constructor(
        range: [Date, Date] | [Date] | [] = [] as any,
        private isSelfModalContainer = true
    ){
        this.range = range as any
    }

    public getPicker(): DateRangePicker{
        return this.picker;
    }

    private getValueString(): string{
        return this.picker? this.picker.stringValue: this.stringValue
    }

    public isActive(): boolean{
        return this.picker != null;
    }

    public getRange(): [Date, Date]{
        return this.picker? this.picker.getRange(): this.range;
    }

    public open(): void{
        this.picker = new DateRangePicker(this.range);

        let inputOffset = this.inputElem.getBoundingClientRect();
        // let offsetLeft = this.inputElem.offsetLeft
        // let offsetTop = this.inputElem.offsetTop
        this.picker.whenAttached(() => {
            let elem = this.picker.getElement() as HTMLElement;
            elem.style.top = ( inputOffset.top + this.inputElem.offsetHeight ) + 'px';
            elem.style.position = 'fixed'
            let modalWidth = DateRangePickerModal.MODAL_WIDTH_REM * CssUtils.getBaseFontSize();
            if(modalWidth + inputOffset.left <= window.innerWidth){
                elem.style.left = inputOffset.left + 'px'
            }else {
                elem.style.left = (inputOffset.right - modalWidth) + 'px'
            }
            // elem.style.left = offsetLeft + 'px';
        })
        document.addEventListener('click', this.handleClick);
    }

    @BindThis
    private handleClick(event: Event): void{
        let elem = event.getClosestComponent([DateRangePickerModal, DateRangePicker]).get();
        if(elem != this && elem != this.picker)
            this.close();
    }

    public close(): void{
        if(this.stringValue != this.picker.stringValue){
            this.range = this.picker.getRange();
            this.stringValue = this.picker.stringValue;
            this.notify()
        }

        this.picker = null;
        document.removeEventListener('click', this.handleClick);
    }

    protected notify(): void{
        let range = this.getRange();
        this.fireEventOnParents(DateRangePicker.SELECT_DATE_RANGE_EVENT, range)
    }

    private clearNotify(): void{
        this.clear();
        this.notify()
    }

    public clear(): void{
        if(this.picker) {
            this.picker.clear();
        }
        this.stringValue = '';
        this.range = [] as any;
    }

    public toJSON(): Object | Object[] {
        if(this.picker)
            return this.picker.toJSON();

        let range = this.range;
        return range.length == 2? [
            ~~(DateUtils.getUTCTimestamp(range[0]) / 1000),
            ~~(DateUtils.getUTCTimestamp(range[1]) / 1000)
        ]: null
    }

    isDisabled(): boolean {
        return this.disabled;
    }

    setDisabled(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
export default DateRangePickerModal;
interface DateRangePickerModal extends Component{}
