import ToJson from "@plastique/core/hash/ToJson";
import Sort from "./Sort";
import JsonMerge from "@plastique/core/hash/JsonMerge";

export default class EntriesRequest {
    @ToJson readonly from: number;
    @ToJson readonly count: number;
    @JsonMerge readonly sort: Sort;

    constructor(from?: number, count?: number, sort?: Sort){
        this.from = from;
        this.count = count;
        this.sort = sort
    }
}