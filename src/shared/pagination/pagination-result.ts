import { PaginationMeta } from "./pagination-meta.model";

export class PaginationResult<T> {
    constructor(
        public readonly data: T[],
        public readonly meta: PaginationMeta
    ) {}
}