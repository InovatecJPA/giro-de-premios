import { Body, Controller, Get, NotFoundException, Param, Post, Query } from "@nestjs/common";
import { TicketPaymentService } from "./ticket-payment.service";
import { BuyingTicketsDto } from "./dto/buying-ticket.dto";
import { TicketQueueService } from "../ticket-queue/ticket-queue.service";
import { ResponseTicketPaymentSchema } from "./dto/response-ticket-payment.dto";
import { Permissions, Roles } from "../../../decorators/roles-and-permissions.decorator";
import { CurrentUser } from "../../../decorators/get-current-user.decorator";
import { SelfOnly } from "../../../decorators/self-only.decorator";
import { UserService } from "../../../user/user.service";

@Roles('admin', 'suporte', 'influencer')
@Permissions('ticket-payment')
@Controller('ticket-payment')
export class TicketPaymentController {
    constructor(
        private readonly ticketPaymentService: TicketPaymentService,
        private readonly userService: UserService,
    ) { }

    @Roles('admin', 'suporte')
    @Get()
    async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };

        return await this.ticketPaymentService.findAll(paginationOptions);
    }

    @Post('buy-tickets/:social_media')
    async buyTicketsWithSlug(@Param('social_media') socialMedia: string, @Body() body: BuyingTicketsDto) {
        const user = await this.userService.findBySocialMedia(socialMedia);

        if (!user) {
            throw new NotFoundException('Usuário não encontrado');
        }

        const ticketPayment = await this.ticketPaymentService.buyTickets({ user_id: user.id, ...body });

        const ticketPaymentResponse = ResponseTicketPaymentSchema.parse(ticketPayment);

        return { data: { ticketPaymentResponse } }

    }


    @Post('buy-tickets')
    async buyTickets(@Body() buyingTicketsData: BuyingTicketsDto,) {

        const ticketPayment = await this.ticketPaymentService.buyTickets(buyingTicketsData);

        const ticketPaymentResponse = ResponseTicketPaymentSchema.parse(ticketPayment);

        return { data: { ticketPaymentResponse } }
    }


    @Get('ticket-count/:raffle_edition_id')
    async countSoldTickets(@Param('raffle_edition_id') raffle_edition_id: string) {
        return await this.ticketPaymentService.countSoldTickets(raffle_edition_id);
    }


    @SelfOnly()
    @Get('user/:id')
    async findAllByUserId(@Param('id') id: string, @Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };

        const ticketPayment = await this.ticketPaymentService.findAllByUserId(id, paginationOptions);

        return { data: { ticketPayment } }
    }


    @Get(':id')
    async findById(@Param('id') id: string) {
        const ticketPayment = await this.ticketPaymentService.findById(id);

        const ticketPaymentResponse = ResponseTicketPaymentSchema.parse(ticketPayment);

        return { data: { ticketPaymentResponse } }
    }

}