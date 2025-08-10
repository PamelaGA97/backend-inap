import { SelectQueryBuilder } from "typeorm";
import { PaginationModel } from "./model/pagination.model";

interface PaginationOptions {
    page?: number,
    limit?: number
}

export async function paginate<T>(
    qb: SelectQueryBuilder<T>,
    options: PaginationOptions = {}
) {
    const page = options.page ?? 1;
    const limit = options.limit ?? 10;

    const [items, total] = await qb
        .skip((page-1)*limit)
        .take(limit)
        .getManyAndCount();

    return {
        success: true,
        data: items,
        meta: {
            totalItems: total,
            itemCounts: items.length,
            itemsPerPage: limit,
            totalPages: Math.ceil(total/limit),
            currentPage: page
        }
    }
}