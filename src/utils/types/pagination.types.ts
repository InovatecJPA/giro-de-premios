import { PrismaClient } from "src/prisma/generated/prisma/client";

export type PaginationOptions = {
    skip: number;
    take: number;
};

export type PaginatedResult<T> = {
    total: number;
    items: T[];
    pages: number;
    skip: number;
    take: number;
}
