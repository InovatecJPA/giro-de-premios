
import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { ExtractService } from './extract.service';
import { ResponseDepositExtractSchema } from './dto/response-deposit-extract.dto';
import { Permissions, Roles } from '../../decorators/roles-and-permissions.decorator';

@Roles('admin', 'suporte', 'influencer')
// @Permissions('extract')
@Controller('extract')
export class ExtractController {
    constructor(private readonly extractService: ExtractService) { }

    @Roles('admin')
    @Get()
    findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
        const paginationOptions = { skip, take };
        return this.extractService.findAll(paginationOptions);
    }


    @Roles('admin')
    @Get(':id')
    findById(@Param('id') id: string) {
        const extract = this.extractService.findById(id);

        const extractResponse = ResponseDepositExtractSchema.parse(extract);
        return { data: { extractResponse } }
    }
}
