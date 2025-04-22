// src/ticket-raffle/ticket-raffle.controller.ts
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
  import { ResponseTicketRaffleDto } from './dto/response-ticket-raffle.dto';
  
  @Controller('ticket-raffles')
  export class TicketRaffleController {
    constructor(private readonly ticketRaffleService: TicketRaffleService) {}
  
    @Get()
    async findAll(
      @Query('skip') skip = 0,
      @Query('take') take = 10,
    ) {
      const result = await this.ticketRaffleService.findAll({ skip, take });
      return { data: {result} };
    }
  
    @Get(':id')
    async findById(@Param('id') id: string) {
      const raffle = await this.ticketRaffleService.findById(id);
      return {
        data: plainToInstance(ResponseTicketRaffleDto, raffle),
      };
    }
  
    @Post()
    async create(@Body() dto: CreateTicketRaffleDto) {
      const created = await this.ticketRaffleService.create(dto);
      return {
        data: plainToInstance(ResponseTicketRaffleDto, created),
      };
    }
  
    @Patch(':id')
    async updatePatch(
      @Param('id') id: string,
      @Body() dto: PatchUpdateTicketRaffleDto,
    ) {
      const updated = await this.ticketRaffleService.update(id, dto);
      return {
        data: plainToInstance(ResponseTicketRaffleDto, updated),
      };
    }
  
    @Put(':id')
    async updatePut(
      @Param('id') id: string,
      @Body() dto: PutUpdateTicketRaffleDto,
    ) {
      const updated = await this.ticketRaffleService.update(id, dto);
      return {
        data: plainToInstance(ResponseTicketRaffleDto, updated),
      };
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id: string) {
      await this.ticketRaffleService.remove(id);
    }
  }
  