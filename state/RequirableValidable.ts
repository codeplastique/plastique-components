import Validable from "./Validable";

export default interface RequirableValidable extends Validable{
    setRequired(isRequired: boolean): void
}