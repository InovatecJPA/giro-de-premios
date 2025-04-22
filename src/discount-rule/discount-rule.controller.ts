// src/discount-rule/discount-rule.controller.ts
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
  import { DiscountRuleService } from './discount-rule.service';
  import { CreateDiscountRuleDto } from './dto/create-discount-rule.dto';
  import { PatchUpdateDiscountRuleDto } from './dto/patch-update-discount-rule.dto';
  import { PutUpdateDiscountRuleDto } from './dto/put-update-discount-rule.dto';
  import { ResponseDiscountRuleDto } from './dto/response-discount-rule.dto';
  
  @Controller('discount-rules')
  export class DiscountRuleController {
    constructor(private readonly service: DiscountRuleService) {}
  
    @Get()
    async findAll(
      @Query('skip') skip = 0,
      @Query('take') take = 10,
    ) {
      const response = await this.service.findAll({ skip, take });
      return { data: {response} };
    }
  
    @Get(':id')
    async findById(@Param('id') id: string) {
      const rule = await this.service.findById(id);
      return { data: plainToInstance(ResponseDiscountRuleDto, rule) };
    }
  
    @Post()
    async create(@Body() dto: CreateDiscountRuleDto) {
      const created = await this.service.create(dto);
      return { data: plainToInstance(ResponseDiscountRuleDto, created) };
    }
  
    @Patch(':id')
    async updatePatch(
      @Param('id') id: string,
      @Body() dto: PatchUpdateDiscountRuleDto,
    ) {
      const updated = await this.service.update(id, dto);
      return { data: plainToInstance(ResponseDiscountRuleDto, updated) };
    }
  
    @Put(':id')
    async updatePut(
      @Param('id') id: string,
      @Body() dto: PutUpdateDiscountRuleDto,
    ) {
      const updated = await this.service.update(id, dto);
      return { data: plainToInstance(ResponseDiscountRuleDto, updated) };
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id: string) {
      await this.service.remove(id);
    }
  }
  