import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseUserDTO } from './dto/response-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { PatchUpdateUser } from './dto/patch-update-user.dto';
import { PutUpdateUser } from './dto/put-update-user.dto';

import { plainToInstance } from 'class-transformer';
import { AuthService } from '../auth/auth.service';
import { IsPublic } from '../decorators/is-public-validator.decorator';

@Controller('users')
export default class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) { }

  @Get()
  async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
    try {

      const pagination = {
        skip,
        take
      }

      const users = await this.userService.findAll(pagination);

      return { data: { users } }
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const users = await this.userService.findById(id);

      return { data: { users } }
    } catch (error) {
      throw error
    }
  }

  @IsPublic()
  @Post()
  async create(@Body() data: CreateUserDTO) {
    try {

      const userResponse = await this.userService.create(data);

      return { data: { userResponse } }
    } catch (error) {
      throw error
    }
  }


  @Patch(':id')
  async updatePatch(@Param('id') id: string, @Body() data: PatchUpdateUser) {
    try {

      const user = await this.userService.update(id, data);

      const userResponse = plainToInstance(ResponseUserDTO, {
        ...user,
        comissao: user.comissao.toString()
      });

      return { data: { userResponse } }
    } catch (error) {
      throw error
    }
  }

  @Put(':id')
  async updatePut(@Param('id') id: string, @Body() data: PutUpdateUser) {
    try {
      const user = await this.userService.update(id, data);

      const userResponse = plainToInstance(ResponseUserDTO, {
        ...user,
        comissao: user.comissao.toString(),
      });

      return { data: { userResponse } }
    } catch (error) {
      throw error
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      if (await this.userService.delete(id))
        return
    } catch (error) {
      throw error
    }
  }
}
