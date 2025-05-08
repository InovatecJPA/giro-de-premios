import { Injectable, NotFoundException } from "@nestjs/common";
import { PaginationOptions } from "src/utils/types/pagination.types";
import { CreatePrizeDto } from "./dto/create-prize.dto";
import { PutUpdatePrizeDto } from "./dto/put-update-prize.dto";
import { PatchUpdatePrizeDto } from "./dto/patch-update-prize.dto";
import { plainToInstance } from "class-transformer";
import { ResponsePrizeDto, ResponsePrizeSchema } from "./dto/response-prize.dto";
import { Prize } from "../../../../prisma/generated/prisma/client";
import { PrismaService } from "../../../../prisma/prisma.service";

@Injectable()
export class PrizeService {
    constructor(private prisma: PrismaService) { }

    async findAll(paginationOptions: PaginationOptions) {
        const { items, meta } = await this.prisma.paginate(
            this.prisma.prize,
            {
                ...paginationOptions,
                select: {
                    id: true,
                    prize_name: true,
                    prize_quantity: true,
                },
            }
        )

        const data = ResponsePrizeSchema.array().parse(items);

        return {
            items: data,
            meta,
        }
    }

    async findById(id: string) {
        const prize = await this.prisma.prize.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                prize_name: true,
                prize_quantity: true,
            },
        })

        return prize
    }

    async create(data: CreatePrizeDto) {
        const prize = await this.prisma.prize.create({ data })

        return prize
    }
    async update(id: string, data: PutUpdatePrizeDto | PatchUpdatePrizeDto): Promise<Prize> {

        const updatedPrize = await this.prisma.prize.update({
            where: {
                id,
            },
            data,
        })

        return updatedPrize
    }
    async delete(id: string) {
        if (!(await this.exists(id)))
            throw new NotFoundException('Prize not found');

        const deletedPrize = await this.prisma.prize.delete({
            where: {
                id,
            },
        })

        return deletedPrize
    }

    async exists(id: string) {
        if (await this.findById(id)) {
            return true;
        }

        return false;
    }
}