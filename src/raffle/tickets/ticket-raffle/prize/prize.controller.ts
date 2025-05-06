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
import { PrizeService } from './prize.service';
import { CreatePrizeDto } from './dto/create-prize.dto';
import { PatchUpdatePrizeDto } from './dto/patch-update-prize.dto';
import { PutUpdatePrizeDto } from './dto/put-update-prize.dto';
import { ResponsePrizeDto, ResponsePrizeSchema } from './dto/response-prize.dto';
import { plainToInstance } from 'class-transformer';

@Controller('prizes')
export class PrizeController {
  constructor(private readonly prizeService: PrizeService) { }

  @Get()
  async findAll(
    @Query('page') skip = 1,
    @Query('limit') take = 10,
  ): Promise<any> {
    try {
      const pagination = { skip, take };
      const prizes = await this.prizeService.findAll(pagination);
      return { data: { prizes } };
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<any> {
    try {
      const prize = await this.prizeService.findById(id);
      return { data: { prize } };
    } catch (error) {
      throw error;
    }
  }

  @Post()
  async create(@Body() data: CreatePrizeDto): Promise<any> {
    try {
      const created = await this.prizeService.create(data);

      const prizeResponse = ResponsePrizeSchema.parse(created);
      return { data: { prizeResponse } };
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  async updatePatch(
    @Param('id') id: string,
    @Body() data: PatchUpdatePrizeDto,
  ): Promise<any> {
    try {
      const updated = await this.prizeService.update(id, data);

      const prizeResponse = ResponsePrizeSchema.parse(updated);
      return { data: { prizeResponse } };
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async updatePut(
    @Param('id') id: string,
    @Body() data: PutUpdatePrizeDto,
  ): Promise<any> {
    try {
      const updated = await this.prizeService.update(id, data);

      const prizeResponse = ResponsePrizeSchema.parse(updated);
      return { data: { prizeResponse } };
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<any> {
    try {
      await this.prizeService.delete(id);
      return
    } catch (error) {
      throw error;
    }
  }
}
