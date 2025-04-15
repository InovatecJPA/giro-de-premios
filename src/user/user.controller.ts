import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseUserDTO } from './dto/response-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { PatchUpdateUser } from './dto/patch-update-user.dto';
import { PutUpdateUser } from './dto/put-update-user.dto';
import { UserCreateData } from './interface/user-create-data.interface';
import bcrypt from 'bcryptjs'
import { plainToInstance } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';

@Controller('users')
export default class UserController {
  constructor(
    private readonly userService: UserService
  ) { }
  @Get()
  async findAll(@Query('skip') skip = 1, @Query('take') take = 10): Promise<any> {
    try {
      const users = await this.userService.findAll(skip, take);
      return { data: users }
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<any> {
    try {
      const user = await this.userService.findById(id);

      return { data: user }
    } catch (error) {
      console.log(error);
    }
  }

  @Post()
  async create(@Body() data: CreateUserDTO): Promise<any> {
    try {
      const user = await this.userService.create(data);
      const userResponse = plainToInstance(ResponseUserDTO, {
        ...user,
        comissao: user.comissao.toString()
      });

      return { data: { userResponse } }
    } catch (error) {
      console.log(error);
      throw error
    }
  }


  @Patch(':id')
  async updatePatch(@Param('id') id: string, @Body() data: PatchUpdateUser): Promise<any> {
    try {

      const user = await this.userService.update(id, data);

      const userResponse = plainToInstance(ResponseUserDTO, user);

      return { data: { userResponse } }
    } catch (error) {
      console.log(error);
    }
  }

  @Put(':id')
  async updatePut(@Param('id') id: string, @Body() data: PutUpdateUser): Promise<any> {
    try {
      const user = await this.userService.update(id, data);

      const userResponse = plainToInstance(ResponseUserDTO, user);

      return { data: { userResponse } }
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    try {
      if (await this.userService.delete(id))
        return { data: "Usuario deletado com sucesso" };
    } catch (error) {
      console.log(error);
    }
  }
}
