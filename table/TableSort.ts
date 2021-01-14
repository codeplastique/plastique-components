import ToJson from "@plastique/core/hash/ToJson";
import TableColumnEnum from "./TableColumnEnum";

export default class TableSort {
    @ToJson readonly field: TableColumnEnum | string;
    @ToJson readonly direction: 'ASC' | 'DESC';

    constructor(field: TableColumnEnum | string, direction: 'ASC' | 'DESC') {
        this.field = field;
        this.direction = direction;
    }
}