import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Body,
  Query,
  HttpCode,
} from '@nestjs/common';
import { RaffleEditionService } from './raffle-edition.service';
import { CreateRaffleEditionDto } from './dto/create-raffle-edition.dto';
import { PatchUpdateRaffleEditionDto } from './dto/patch-update-raffle-edition.dto';
import { PutUpdateRaffleEditionDto } from './dto/put-update-raffle-edition.dto';
import { ResponseRaffleEditionDto } from './dto/response-raffle-edition.dto';
import { plainToInstance } from 'class-transformer';

@Controller('raffle-editions')
export class RaffleEditionController {
  constructor(private readonly raffleEditionService: RaffleEditionService) { }

  @Get()
  async findAll(
    @Query('page') skip = 1,
    @Query('limit') take = 10,
  ) {
    try {
      const pagination = { skip, take };
      const raffleEditions = await this.raffleEditionService.findAll(pagination);
      return { data: raffleEditions };
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const raffleEditions = await this.raffleEditionService.findById(id);
      return { data: { raffleEditions } };
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async create(
    @Body() data: CreateRaffleEditionDto,
  ) {
    try {
      const created = await this.raffleEditionService.create(data);

      const raffleEditionResponse = plainToInstance(ResponseRaffleEditionDto, created);
      return { data: { raffleEditionResponse } };
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  async updatePatch(
    @Param('id') id: string,
    @Body() data: PatchUpdateRaffleEditionDto,
  ) {
    try {
      const updated = await this.raffleEditionService.update(id, data);

      const raffleEditionResponse = plainToInstance(ResponseRaffleEditionDto, updated);
      return { data: { raffleEditionResponse } };
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async updatePut(
    @Param('id') id: string,
    @Body() data: PutUpdateRaffleEditionDto,
  ) {
    try {
      const updated = await this.raffleEditionService.update(id, data);

      const raffleEditionResponse = plainToInstance(ResponseRaffleEditionDto, updated);
      return { data: { raffleEditionResponse } };
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      await this.raffleEditionService.delete(id);
      return
    } catch (error) {
      throw error;
    }
  }
}
