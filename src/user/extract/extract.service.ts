
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PaginationOptions } from '../../utils/types/pagination.types';
import { plainToInstance } from 'class-transformer';
import { ResponseDepositExtractDto } from './dto/response-deposit-extract.dto';
import { CreateDepositExtractDto } from './dto/create-deposit-extract.dto';
import { ExtractType, User } from '../../prisma/generated/prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { UserService } from '../user.service';

@Injectable()
export class ExtractService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) { }

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

        const data = items.map((item) => plainToInstance(ResponseDepositExtractDto, item))

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


    async deposit(valorTotal: Decimal, userId: string, ticket_payment_id: string) {
        return await this.prisma.$transaction(async (prisma) => {
            const userChain: User[] = [];
            let currentUserId: string | undefined = userId;
            let remainingValue = valorTotal;
            const balanceUpdate: { id: string; saldo: Decimal, commission: Decimal }[] = [];

            while (currentUserId) {
                const user = await prisma.user.findUnique({ where: { id: currentUserId } });
                if (!user) {
                    if (userChain.length === 0) {
                        throw new Error(`Initial user with ID ${userId} not found`);
                    } else {
                        break;
                    }
                }

                userChain.push(user);
                currentUserId = user.owner_id;
            }

            for (let i = userChain.length - 1; i >= 0; i--) {
                const user = userChain[i];
                const comissao = user.comissao;

                const commission = remainingValue.times(comissao);
                balanceUpdate.push({
                    id: user.id,
                    saldo: user.saldo.plus(commission),
                    commission
                });
                remainingValue = remainingValue.times(new Decimal(1).minus(comissao));

            }

            const updatePromises = balanceUpdate.flatMap((update) => {

                prisma.user.update({
                    where: { id: update.id },
                    data: { saldo: update.saldo }
                }),
                    prisma.extract.create({
                        data: {
                            amount: update.commission,
                            type: ExtractType.deposit,
                            user_id: update.id,
                            ticket_payment_id
                        }
                    })
            });

            await Promise.all(updatePromises);

            return remainingValue;
        });
    }


}