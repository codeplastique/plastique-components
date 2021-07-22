import DropdownOption from "./DropdownOption";

export default interface DropdownOptionsGenerator<V>{

    (from: number, count: number, query?: string): Promise<DropdownOption<V>[]>
}