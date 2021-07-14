import ToJson from "@plastique/core/hash/ToJson";

export default class Sort {
    readonly sortField: any;
    @ToJson readonly sortDirection: 'ASC' | 'DESC';

    constructor(field: any, direction: 'ASC' | 'DESC') {
        this.sortField = field;
        this.sortDirection = direction;
    }

    @ToJson
    protected getSortField(): string{
        return this.sortField.toString()
    }
}