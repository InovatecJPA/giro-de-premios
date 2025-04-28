import { Injectable } from "@nestjs/common";
import { PaginationOptions } from "src/utils/types/pagination.types";
import { CreateRaffleEditionDto } from "./dto/create-raffle-edition.dto";
import { PrismaService } from "../../prisma/prisma.service";
import { Decimal } from "@prisma/client/runtime/library";

@Injectable()
export class RaffleEditionService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async findAll(pagination: PaginationOptions) { }

    async findById(id: string) {
        return this.prisma.raffleEdition.findUnique({
            where: { id }
        })
    }


    async create(data: CreateRaffleEditionDto) {
        const superData = {
            ...data,
            total_tickets: 10000000,
            price: new Decimal(data.price),
            user_id: data.user_id ?? null
        }

        const a = await this.prisma.raffleEdition.create(
            {
                data: superData
            }
        )

        return { ...a, price: a.price.toString() }

    }
    async update(id: string, data: any) { }
    async delete(id: string) { }
    async exists(id: string) {
        // if (await this.findById(id)) {
        //       return true;
        //     }

        //     return false;
    }
}