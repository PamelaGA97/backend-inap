import { PaginationDetailModel } from "./pagination-detail.model";

export interface PaginationModel<T> {
    success: boolean;
    data: T[];
    meta: PaginationDetailModel;
}