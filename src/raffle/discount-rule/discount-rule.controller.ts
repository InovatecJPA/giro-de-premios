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
import { DiscountRuleService } from './discount-rule.service';
import { CreateDiscountRuleDto } from './dto/create-discount-rule.dto';
import { PatchUpdateDiscountRuleDto } from './dto/patch-update-discount-rule.dto';
import { PutUpdateDiscountRuleDto } from './dto/put-update-discount-rule.dto';
import { ResponseDiscountRuleDto, ResponseDiscountRuleSchema } from './dto/response-discount-rule.dto';
import { Roles } from '../../decorators/roles-and-permissions.decorator';

@Roles('admin')
@Controller('discount-rules')
export class DiscountRuleController {
  constructor(private readonly service: DiscountRuleService) { }

  @Get()
  async findAll(
    @Query('page') skip = 0,
    @Query('limit') take = 10,
  ) {
    const response = await this.service.findAll({ skip, take });
    return { data: { response } };
  }



  @Post()
  async create(@Body() dto: CreateDiscountRuleDto) {
    const created = await this.service.create(dto);
    return { data: ResponseDiscountRuleSchema.parse(created) };
  }


  @Get(':id')
  async findById(@Param('id') id: string) {
    const rule = await this.service.findById(id);
    return { data: ResponseDiscountRuleSchema.parse(rule) };
  }

  @Patch(':id')
  async updatePatch(
    @Param('id') id: string,
    @Body() dto: PatchUpdateDiscountRuleDto,
  ) {
    const updated = await this.service.update(id, dto);
    return { data: ResponseDiscountRuleSchema.parse(updated) };
  }

  @Put(':id')
  async updatePut(
    @Param('id') id: string,
    @Body() dto: PutUpdateDiscountRuleDto,
  ) {
    const updated = await this.service.update(id, dto);
    return { data: ResponseDiscountRuleSchema.parse(updated) };
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.service.remove(id);
    return
  }
}
