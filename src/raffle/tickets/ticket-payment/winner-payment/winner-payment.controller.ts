import { Body, Controller, Delete, Get, HttpCode, HttpException, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { WinnerPaymentService } from './winner-payment.service';
import { CreateWinnerPaymentDto } from './dto/create-winner-payment.dto';
import { PaymentStatus } from '../../../../prisma/generated/prisma/client';
import { Permissions, Roles } from '../../../../decorators/roles-and-permissions.decorator';

@Roles('admin', 'suporte', 'influencer')
@Permissions('winner-payment')
@Controller('winner-payment')
export class WinnerPaymentController {
    constructor(private readonly winnerPaymentService: WinnerPaymentService) { }

    @Post()
    async create(@Body() createWinnerPaymentDto: CreateWinnerPaymentDto) {
        return await this.winnerPaymentService.create(createWinnerPaymentDto);
    }

    @Roles('admin', 'suporte')
    @Get()
    async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        return await this.winnerPaymentService.findAll({ skip, take });
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.winnerPaymentService.findById(id);
    }

    @Roles('admin', 'suporte')
    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: Partial<CreateWinnerPaymentDto>) {
        return await this.winnerPaymentService.update(id, data);
    }

    @Roles('admin', 'suporte')
    @Patch(':id/update-status')
    async updateStatus(@Param('id') id: string, @Query('status') newStatus: boolean, @Body() data: { payment_date: Date }) {
        const status = newStatus ? PaymentStatus.paid : PaymentStatus.failed

        if (!status) {
            await this.winnerPaymentService.updateStatusFailed(id);
            return
        } else {

            const updateData = {
                status,
                payment_date: data.payment_date
            }

            await this.winnerPaymentService.updateStatusApproved(id, updateData);
        }
    }

    @Roles('admin')
    @HttpCode(204)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.winnerPaymentService.delete(id);
    }
}
