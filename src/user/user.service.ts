import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { PutUpdateUser } from './dto/put-update-user.dto';
import { PatchUpdateUser } from './dto/patch-update-user.dto';
import { ResponseUserDTO } from './dto/response-user.dto';
import { UserCreateData } from './interface/user-create-data.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(skip = 1, take = 10): Promise<ResponseUserDTO[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        number: true,
        social_media: true,
        saldo: true,
        comissao: true,
        profile: true,
        owner_id: true,
        hashed_password: false
      },
      skip: (skip - 1) * take,
      take
    });

    return users;
  }

  async findById(id: string): Promise<ResponseUserDTO | null> {

    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        number: true,
        social_media: true,
        saldo: true,
        hashed_password: false,
        comissao: true,
        profile: true,
        owner_id: true,
      }
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findByCpf(cpf: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        cpf,
      },
    });

    return user;
  }

  async create(data: UserCreateData) {
    if (await this.findByEmail(data.email))
      throw new ConflictException("Email já cadastrado");

    if (await this.findByCpf(data.cpf))
      throw new ConflictException("Cpf já cadastrado");

    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }

  async update(id: string, data: PutUpdateUser | PatchUpdateUser) {
    if (!await this.exists(id)) 
      throw new NotFoundException("Usuario não encontrado");

    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return user;
  }
  
  async delete(id: string) {
    if (!await this.exists(id)) 
      throw new NotFoundException("Usuario não encontrado");
    

    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return user;
  }

  async exists(id: string) {
    if (await this.findById(id)) {
      return true;
    }

    return false;
  }
}
