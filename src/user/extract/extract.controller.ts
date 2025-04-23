
import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { ExtractService } from './extract.service';
import { CreateExtractDto } from './dto/create-extract.dto';
import { ResponseExtractDto } from './dto/response-extract.dto';
import { plainToInstance } from 'class-transformer';

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

        const extractResponse = plainToInstance(ResponseExtractDto, extract);
        return { data: { extractResponse } }
    }

    @Post()
    create(@Body() data: CreateExtractDto) {
        const extract = this.extractService.create(data);

        const extractResponse = plainToInstance(ResponseExtractDto, extract);
        return { data: { extractResponse } }
    }
}
