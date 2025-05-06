import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/prisma.service";
import { CreateWinnerPaymentDto } from "./dto/create-winner-payment.dto";
import { PaginationOptions } from "../../../../utils/types/pagination.types";
import { plainToInstance } from "class-transformer";
import { ResponseWinnerPaymentDto, ResponseWinnerPaymentSchema } from "./dto/response-winner-payment.dto";
import { PaymentStatus } from "../../../../prisma/generated/prisma/client";
import { UpdateStatusSuccessWinnerPaymentDto } from "./dto/update-status-success-winner-payment.dto";

@Injectable()
export class WinnerPaymentService {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateWinnerPaymentDto) {
        return await this.prisma.winnerPayment.create({ data });
    }

    async findAll(paginationOptions: PaginationOptions) {
        const { items, pages, skip, take, total } = await this.prisma.paginate(
            this.prisma.winnerPayment,
            {
                ...paginationOptions,
                select: {
                    id: true,
                    ticket_raffle_id: true,
                    ticket_payment_id: true,
                    status: true,
                    created_at: true,
                },
            }
        )

        const data = items.map((item) => ResponseWinnerPaymentSchema.parse(item));

        return {
            data,
            meta: { total, pages, skip, take },
        }
    }

    async findById(id: string) {
        const winnerPayment = await this.prisma.winnerPayment.findUnique({ where: { id } });
        if (!winnerPayment) {
            throw new NotFoundException('Winner payment not found');
        }
        return winnerPayment;
    }

    async update(id: string, data: Partial<CreateWinnerPaymentDto>) {
        const winnerPayment = await this.prisma.winnerPayment.findUnique({ where: { id } });
        if (!winnerPayment) {
            throw new NotFoundException('Winner payment not found');
        }
        return await this.prisma.winnerPayment.update({
            where: { id },
            data,
        });
    }

    async updateStatusApproved(id: string, data: UpdateStatusSuccessWinnerPaymentDto) {

        const winnerPayment = await this.prisma.winnerPayment.findUnique({ where: { id } });
        if (!winnerPayment) {
            throw new NotFoundException('Winner payment not found');
        }
        return await this.prisma.winnerPayment.update({
            where: { id },
            data,
        });
    }


    async updateStatusFailed(id: string) {
        const winnerPayment = await this.prisma.winnerPayment.findUnique({ where: { id } });
        if (!winnerPayment) {
            throw new NotFoundException('Winner payment not found');
        }
        return await this.prisma.winnerPayment.update({
            where: { id },
            data: { status: PaymentStatus.failed },
        });
    }

    async delete(id: string) {
        const winnerPayment = await this.prisma.winnerPayment.findUnique({ where: { id } });
        if (!winnerPayment) {
            throw new NotFoundException('Winner payment not found');
        }
        return await this.prisma.winnerPayment.delete({ where: { id } });
    }
}

