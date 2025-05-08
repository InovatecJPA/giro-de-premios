import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { TicketRaffleService } from './ticket-raffle.service';
import { CreateTicketRaffleDto } from './dto/create-ticket-raffle.dto';
import { PatchUpdateTicketRaffleDto } from './dto/patch-update-ticket-raffle.dto';
import { PutUpdateTicketRaffleDto } from './dto/put-update-ticket-raffle.dto';
import { ResponseTicketRaffleDto, ResponseTicketRaffleSchema } from './dto/response-ticket-raffle.dto';

@Controller('ticket-raffles')
export class TicketRaffleController {
  constructor(private readonly ticketRaffleService: TicketRaffleService) { }

  @Get()
  async findAll(
    @Query('page') skip = 0,
    @Query('limit') take = 10,
  ) {
    const result = await this.ticketRaffleService.findAll({ skip, take });
    return { data: { result } };
  }


  @Post()
  async create(@Body() dto: CreateTicketRaffleDto) {
    const created = await this.ticketRaffleService.create(dto);
    return {
      data: ResponseTicketRaffleSchema.parse(created),
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const raffle = await this.ticketRaffleService.findById(id);
    return {
      data: ResponseTicketRaffleSchema.parse(raffle),
    };
  }

  @Patch(':id')
  async updatePatch(
    @Param('id') id: string,
    @Body() dto: PatchUpdateTicketRaffleDto,
  ) {
    const updated = await this.ticketRaffleService.update(id, dto);
    return {
      data: ResponseTicketRaffleSchema.parse(updated),
    };
  }

  @Put(':id')
  async updatePut(
    @Param('id') id: string,
    @Body() dto: PutUpdateTicketRaffleDto,
  ) {
    const updated = await this.ticketRaffleService.update(id, dto);
    return {
      data: ResponseTicketRaffleSchema.parse(updated),
    };
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.ticketRaffleService.remove(id);
    return
  }
}
