import ToJson from "@plastique/core/hash/ToJson";

export default class Sort {
    readonly sortField: any | null;
    @ToJson readonly sortDirection: 'ASC' | 'DESC';

    constructor(field?: any | null, direction: 'ASC' | 'DESC' = 'ASC') {
        this.sortField = field;
        this.sortDirection = direction;
    }

    @ToJson
    protected getSortField(): string{
        return this.sortField? this.sortField.toString(): null
    }
}