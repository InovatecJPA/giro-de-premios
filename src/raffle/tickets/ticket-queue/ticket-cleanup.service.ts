// ticket-cleanup.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { TicketRaffleStatus } from '../../../prisma/generated/prisma/client';
import { Cron } from '@nestjs/schedule'

@Injectable()
export class TicketCleanupService {
    private readonly logger = new Logger(TicketCleanupService.name);

    constructor(private prisma: PrismaService) { }

    @Cron('0 */5 * * * *')
    async cleanupReservedTickets() {
        this.logger.log('Iniciando limpeza de tickets reservados expirados');

        const fiveMinutesAgo = new Date();
        fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

        try {
            const result = await this.prisma.ticketRaffle.updateMany({
                where: {
                    status: TicketRaffleStatus.reserved,
                    updated_at: {
                        lt: fiveMinutesAgo
                    }
                },
                data: {
                    status: TicketRaffleStatus.available
                }
            });

            this.logger.log(`Tickets liberados: ${result.count}`);
        } catch (error) {
            this.logger.error(`Erro ao limpar tickets reservados: ${error.message}`);
        }
    }
}