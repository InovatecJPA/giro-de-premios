
import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { ExtractService } from './extract.service';
import { CreateDepositExtractDto } from './dto/create-deposit-extract.dto';
import { ResponseDepositExtractDto } from './dto/response-deposit-extract.dto';
import { plainToInstance } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

@Controller('extract')
export class ExtractController {
    constructor(private readonly extractService: ExtractService) { }

    @Get()
    findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };
        return this.extractService.findAll(paginationOptions);
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        const extract = this.extractService.findById(id);

        const extractResponse = plainToInstance(ResponseDepositExtractDto, extract);
        return { data: { extractResponse } }
    }

    @Post()
    deposit(@Body() dto: CreateDepositExtractDto) {
        return this.extractService.deposit(new Decimal(dto.amount), dto.user_id, dto.ticket_payment_id);
    }
}
