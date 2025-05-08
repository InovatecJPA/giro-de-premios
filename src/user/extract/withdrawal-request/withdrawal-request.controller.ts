import { Controller, Post, Get, Param, Body, Patch, Query, HttpCode } from '@nestjs/common';
import { WithdrawalRequestService } from './withdrawal-request.service';
import { CreateWithdrawalRequestDTO } from './dto/create-withdrawal-request.dto';
import { ResponseDepositExtractDto, ResponseDepositExtractSchema } from '../dto/response-deposit-extract.dto';
import { plainToInstance } from 'class-transformer';

@Controller('withdrawal-requests')
export class WithdrawalRequestController {
    constructor(private readonly service: WithdrawalRequestService) { }

    @Post()
    async create(@Body() dto: CreateWithdrawalRequestDTO) {
        return await this.service.create(dto);
    }



    @Get()
    async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };
        return await this.service.findAll(paginationOptions);
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const withdrawal = await this.service.findById(id);

        const data = ResponseDepositExtractSchema.parse(withdrawal);

        return { data }
    }

    @HttpCode(204)
    @Patch(':id')
    async updateStatus(@Param('id') id: string, @Query('status') status: boolean) {
        if (status) {
            await this.service.approveWithdrawal(id);
        } else {
            await this.service.rejectWithdrawal(id);
        }
    }
}
