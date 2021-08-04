import ToJson from "@plastique/core/hash/ToJson";
import EntriesRequest from "./EntriesRequest";
import Sort from "./Sort";

export default class FilterRequest<F> extends EntriesRequest{
    @ToJson readonly filter: F;

    constructor(from?: number, limit?: number, filter?: F, sort?: Sort){
        super(from, limit, sort)
        this.filter = filter;
    }
}