import DropdownOption from "./DropdownOption";

export default interface DropdownOptionsProducer<V>{
    /**
     * @return Promise of [options, selectedOption], selectedOption is optional
     * or Promise of options only
     */
    () : Promise<([ReadonlyArray<DropdownOption<V>>,  DropdownOption<V>?]) | ReadonlyArray<DropdownOption<V>>>
}