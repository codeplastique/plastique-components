import EntriesRequest from "./EntriesRequest";
import ToJson from "@plastique/core/hash/ToJson";
import Sort from "./Sort";

export default class QueryRequest extends EntriesRequest{
    @ToJson readonly query: string;

    constructor(from?: number, count?: number, query?: string, sort?: Sort){
        super(from, count, sort)
        this.query = query;
    }
}