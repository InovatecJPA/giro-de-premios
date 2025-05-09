import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseUserDTO, ResponseUserSchema } from './dto/response-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { PatchUpdateUser } from './dto/patch-update-user.dto';
import { PutUpdateUser } from './dto/put-update-user.dto';
import { IsPublic } from '../decorators/is-public-validator.decorator';
import { SelfOnly } from '../decorators/self-only.decorator';
import { Permissions, Roles } from '../decorators/roles-and-permissions.decorator';


@Roles('admin', 'suporte', 'influencer')
@Controller('users')
export default class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @SelfOnly()
  // @Permissions('view-self')
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const users = await this.userService.findById(id);

      if (!users) {
        throw new NotFoundException('Usuario nao encontrado')
      }

      return { data: { users } }
    } catch (error) {
      throw error
    }
  }

  @Roles('admin', 'suporte')
  @Permissions('view-users')
  @Get()
  async findAll(@Query('page') skip = 1, @Query('limit') take = 10) {
    try {

      const pagination = {
        skip,
        take
      }

      const users = await this.userService.findAll(pagination);

      return { data: users }
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



  @Permissions('update-self')
  @SelfOnly()
  @Patch(':id')
  async updatePatch(@Param('id') id: string, @Body() data: PatchUpdateUser) {
    try {

      const user = await this.userService.update(id, data);

      const userResponse = ResponseUserSchema.parse(user)

      return { data: { userResponse } }
    } catch (error) {
      throw error
    }
  }

  @Permissions('update-self')
  @SelfOnly()
  @Put(':id')
  async updatePut(@Param('id') id: string, @Body() data: PutUpdateUser) {
    try {
      const user = await this.userService.update(id, data);

      const userResponse = ResponseUserSchema.parse(user)

      return { data: { userResponse } }
    } catch (error) {
      throw error
    }
  }

  @Roles('admin')
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
