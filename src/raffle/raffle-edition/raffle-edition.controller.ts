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
  UseGuards,
} from '@nestjs/common';
import { RaffleEditionService } from './raffle-edition.service';
import { PatchUpdateRaffleEditionDto } from './dto/patch-update-raffle-edition.dto';
import { PutUpdateRaffleEditionDto } from './dto/put-update-raffle-edition.dto';
import { ResponseRaffleEditionSchema } from './dto/response-raffle-edition.dto';
import { CreateBodyRaffleEditionDto } from './dto/create-raffle-edition-body.dto';
import { PatchAddFinalPrizeDto } from './dto/patch-add-final-prize.dto';
import { Roles } from '../../decorators/roles-and-permissions.decorator';
import { OwnsRaffleEditionGuard } from '../../guards/raffle-edition-owner.guard';

@Roles('admin', 'suporte', 'influencer')
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

  @Post()
  async create(
    @Body() data: CreateBodyRaffleEditionDto,

  ) {
    try {
      const { prizes, ...dataEdition } = data

      const raffleEdition = await this.raffleEditionService.create(dataEdition, prizes);

      const raffleEditionResponse = ResponseRaffleEditionSchema.parse(raffleEdition)

      return { data: { raffleEditionResponse } };
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

  @UseGuards(OwnsRaffleEditionGuard)
  @Patch(':id')
  async updatePatch(
    @Param('id') id: string,
    @Body() data: PatchUpdateRaffleEditionDto,
  ) {
    try {
      const updated = await this.raffleEditionService.update(id, data);

      const raffleEditionResponse = ResponseRaffleEditionSchema.parse(updated);

      return { data: { raffleEditionResponse } };
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(OwnsRaffleEditionGuard)
  @Put(':id')
  async updatePut(
    @Param('id') id: string,
    @Body() data: PutUpdateRaffleEditionDto,
  ) {
    try {
      const updated = await this.raffleEditionService.update(id, data);

      const raffleEditionResponse = ResponseRaffleEditionSchema.parse(updated);
      return { data: { raffleEditionResponse } };
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(OwnsRaffleEditionGuard)
  @Patch(':id/add-final-prize')
  async addFinalPrize(@Param('id') id: string, @Body() data: PatchAddFinalPrizeDto) {
    try {
      const { ticket_number } = data

      await this.raffleEditionService.addFinalPrize(id, ticket_number);
      return
    } catch (error) {
      throw error;
    }
  }


  @Roles('admin')
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
