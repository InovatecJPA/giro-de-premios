import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseUserDTO } from './dto/response-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { PatchUpdateUser } from './dto/patch-update-user.dto';
import { PutUpdateUser } from './dto/put-update-user.dto';
import { UserCreateData } from './interface/user-create-data.interface';
import  bcrypt  from 'bcryptjs'
import { plainToInstance } from 'class-transformer';

@Controller('users')
export default class UserController {
  constructor(
    private readonly userService: UserService
  ) { }
    @Get()
    async findAll(@Query('skip') skip = 1, @Query('take') take = 10): Promise<any> {
      const users = await this.userService.findAll(skip, take);
      return {data: users}
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<any> {
      const user = await this.userService.findById(id);
      
      return {data: user}
    }

    @Post()
    async create(@Body() data: CreateUserDTO): Promise<any> {
      const hashed_password = await bcrypt.hash(data.password, 10);
      
      const userData: UserCreateData = {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        number: data.number,
        social_media: data.social_media,
        comissao: data.comissao,
        hashed_password,
        saldo: 0,
        profile: data.profile
      }

      const user = await this.userService.create(userData);
    
      const userResponse = plainToInstance(ResponseUserDTO, user);
      return {data: {userResponse}}
    }

    
    @Patch(':id')
    async updatePatch(@Param('id') id: string, @Body() data: PatchUpdateUser): Promise<any> {
      const user = await this.userService.update(id, data);

      const userResponse =  plainToInstance(ResponseUserDTO, user);
    
      return {data: {userResponse}}
    }
    
    @Put(':id')
    async updatePut(@Param('id') id: string, @Body() data: PutUpdateUser): Promise<any> {
      const user = await this.userService.update(id, data);

      const userResponse = plainToInstance(ResponseUserDTO, user);

      return {data: {userResponse}}
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
      if (await this.userService.delete(id))
      return {data: "Usuario deletado com sucesso"};
    }
}
