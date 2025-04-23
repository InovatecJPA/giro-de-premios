
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PaginationOptions } from '../../utils/types/pagination.types';
import { plainToInstance } from 'class-transformer';
import { ResponseExtractDto } from './dto/response-extract.dto';
import { CreateExtractDto } from './dto/create-extract.dto';

@Injectable()
export class ExtractService {
    constructor(private prisma: PrismaService) { }

    async findAll(paginationOptions: PaginationOptions) {
        const { items, pages, skip, take, total } = await this.prisma.paginate(
            this.prisma.extract,
            {
                ...paginationOptions,
                select: {
                    id: true,
                    amount: true,
                    type: true,
                    ticket_payment_id: true,
                    created_at: true,
                },
            }
        )

        const data = plainToInstance(ResponseExtractDto, items);

        return {
            data: data,
            meta: { total, pages, skip, take },
        };
    }

    async findById(id: string) {
        return this.prisma.extract.findUnique({
            where: { id },
        });
    }

    async create(data: CreateExtractDto) {
        return this.prisma.extract.create({
            data,
        });
    }
}
