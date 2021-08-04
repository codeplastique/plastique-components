import ToJson from "@plastique/core/hash/ToJson";
import Sort from "./Sort";
import JsonMerge from "@plastique/core/hash/JsonMerge";

export default class EntriesRequest {
    @ToJson readonly from: number;
    @ToJson readonly limit: number;
    @JsonMerge readonly sort: Sort;

    constructor(from?: number, limit?: number, sort?: Sort){
        this.from = from;
        this.limit = limit;
        this.sort = sort
    }
}