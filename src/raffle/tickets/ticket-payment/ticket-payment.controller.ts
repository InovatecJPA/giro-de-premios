import { Body, Controller, Get, NotFoundException, Param, Post, Query } from "@nestjs/common";
import { TicketPaymentService } from "./ticket-payment.service";
import { BuyingTicketsDto } from "./dto/buying-ticket.dto";
import { TicketQueueService } from "../ticket-queue/ticket-queue.service";
import { plainToInstance } from "class-transformer";
import { ResponseTicketPaymentDto } from "./dto/response-ticket-payment.dto";


@Controller('ticket-payment')
export class TicketPaymentController {
    constructor(
        private readonly ticketPaymentService: TicketPaymentService,
        private readonly ticketQueueService: TicketQueueService,
    ) { }

    @Get()
    async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };

        return await this.ticketPaymentService.findAll(paginationOptions);
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const ticketPayment = await this.ticketPaymentService.findById(id);

        const ticketPaymentResponse = plainToInstance(ResponseTicketPaymentDto, ticketPayment);

        return { data: { ticketPaymentResponse } }
    }

    @Post('buy-tickets')
    async buyTickets(@Body() buyingTicketsData: BuyingTicketsDto) {
        const ticketPayment = await this.ticketPaymentService.buyTickets(buyingTicketsData);

        const ticketPaymentResponse = plainToInstance(ResponseTicketPaymentDto, {
            ...ticketPayment,
            total_value: ticketPayment.total_value.toString(),
            discount: ticketPayment.discount.toString()
        });

        return { data: { ticketPaymentResponse } }
    }

    @Get('status/:jobId')
    async checkStatus(@Param('jobId') jobId: string) {
        return await this.ticketQueueService.getJobStatus(jobId);
    }

    @Get('clear-queue')
    async clearQueue() {
        return await this.ticketQueueService.clearQueue();
    }

    @Get('ticket-count/:raffle_edition_id')
    async countSoldTickets(@Param('raffle_edition_id') raffle_edition_id: string) {
        return await this.ticketPaymentService.countSoldTickets(raffle_edition_id);
    }
}