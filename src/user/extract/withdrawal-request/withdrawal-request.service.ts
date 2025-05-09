import { ConflictException, Injectable } from '@nestjs/common';

import { CreateWithdrawalRequestDTO } from './dto/create-withdrawal-request.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { ExtractType, PaymentStatus } from '../../../prisma/generated/prisma/client';
import { PaginationOptions } from '../../../utils/types/pagination.types';
import { plainToInstance } from 'class-transformer';
import { ResponseDepositExtractDto, ResponseDepositExtractSchema } from '../dto/response-deposit-extract.dto';

@Injectable()
export class WithdrawalRequestService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createWithdrawalRequestDTO: CreateWithdrawalRequestDTO) {
        const withdrawalOnGoing = await this.prisma.withdrawalRequest.findFirst({
            where: {
                user_id: createWithdrawalRequestDTO.user_id,
                status: PaymentStatus.pending
            }
        })

        if (withdrawalOnGoing) {
            throw new ConflictException('You already have a pending withdrawal request');
        }

        return await this.prisma.withdrawalRequest.create({
            data: createWithdrawalRequestDTO
        });
    }

    async findAll(paginationOptions: PaginationOptions) {
        const { items, meta } = await this.prisma.paginate(
            this.prisma.withdrawalRequest,
            {
                ...paginationOptions,
                select: {
                    id: true,
                    amount: true,
                    status: true,
                    created_at: true,
                },
            }
        )

        const data = items.map((item) => ResponseDepositExtractSchema.parse(item))

        return {
            items: data,
            meta,
        }
    }

    async findById(id: string) {
        return await this.prisma.withdrawalRequest.findUnique({
            where: { id },
        });
    }

    async rejectWithdrawal(id: string) {
        await this.prisma.withdrawalRequest.update({
            where: { id },
            data: { status: PaymentStatus.rejected },
        });
    }

    async approveWithdrawal(id: string) {
        await this.prisma.$transaction(async (tx) => {
            const withdrawal = await tx.withdrawalRequest.update({
                where: { id },
                data: { status: PaymentStatus.paid },
            });

            await tx.user.update({
                where: { id: withdrawal.user_id },
                data: { saldo: { decrement: withdrawal.amount } },
            });

            await tx.extract.create({
                data: {
                    amount: withdrawal.amount,
                    type: ExtractType.withdrawal,
                    user_id: withdrawal.user_id
                }
            })
        })

    }
}
