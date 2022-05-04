import Filter from "plastique-components/filter/Filter";
import Reactive from "@plastique/core/component/Reactive";
import Component from "@plastique/core/component/Component";
import Jsonable from "@plastique/core/hash/Jsonable";
import Listener from "@plastique/core/event/Listener";
import DateRangePickerModal from "../datepicker/DateRangePickerModal";
import DateRangePicker from "../datepicker/DateRangePicker";

@Reactive(function (this: DateRangeFilter) {
`<div xmlns:v="http://github.com/codeplastique/plastique" 
      class="Filter"
      v:classappend="
            ${this.picker.isActive() || this.isFilled()? 'Filter_filled': ''} +
            ${this.picker.isDisabled() ? 'Filter_disabled' : ''}
      ">
   
    <label class="Filter__name" v:text="${this.name}"></label>
    <picker v:component="${this.picker}" v:classappend="'Date-range-picker_filter'"></picker>
</div>
`})
class DateRangeFilter extends Filter<any> implements Jsonable{
    public readonly picker: DateRangePickerModal;

    constructor(private name: string, dateRangePicker?: DateRangePickerModal) {
        super();
        this.picker = dateRangePicker || new DateRangePickerModal();
    }

    @Listener(DateRangePicker.SELECT_DATE_RANGE_EVENT)
    private onChange(dates: [Date, Date]): void {
        this.fireEventOnParents(Filter.CHANGE_EVENT, dates);
    }

    public clear(): void {
        this.picker.clear();
    }

    public isFilled(): boolean {
        return this.picker.getRange().length > 0
    }

    public isMatch(value: any): boolean {
        return true;
    }

    public toJSON(): Object | Object[] {
        return this.picker.toJSON();
    }

    isDisabled(): boolean {
        return this.picker.isDisabled();
    }

    setDisabled(isDisabled: boolean): void {
        this.picker.setDisabled(isDisabled)
    }

}

export default DateRangeFilter;
interface DateRangeFilter extends Component {}