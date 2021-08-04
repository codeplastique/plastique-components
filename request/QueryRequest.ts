import EntriesRequest from "./EntriesRequest";
import ToJson from "@plastique/core/hash/ToJson";
import Sort from "./Sort";

export default class QueryRequest extends EntriesRequest{
    @ToJson readonly query: string;

    constructor(from?: number, limit?: number, query?: string, sort?: Sort){
        super(from, limit, sort)
        this.query = query;
    }
}