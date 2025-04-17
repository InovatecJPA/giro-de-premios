import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PutUpdateUser } from './dto/put-update-user.dto';
import { PatchUpdateUser } from './dto/patch-update-user.dto';
import { ResponseUserDTO } from './dto/response-user.dto';
import { UserCreateData } from './interface/user-create-data.interface';
import { PrismaService } from '../prisma/prisma.service';
import bcrypt from 'bcryptjs'
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from '../prisma/generated/prisma/client';
import { Pagination } from '../utils/types/pagination.types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async findAll(pagination: Pagination): Promise<ResponseUserDTO[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        cpf: true,
        number: true,
        social_media: true,
        saldo: true,
        comissao: true,
        profile: true,
        owner_id: true,
      },
      skip: (pagination.skip - 1) * pagination.take,
      take: pagination.take
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
        number: true,
        social_media: true,
        saldo: true,
        comissao: true,
        profile: true,
        owner_id: true,
      }
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

  async create(dataUser: CreateUserDTO) {
    if (await this.findByCpf(dataUser.cpf))
      throw new ConflictException("Cpf já cadastrado");

    const data: UserCreateData = {
      ...dataUser,
      saldo: 0n
    }

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

    if (!user)
      throw new Error("Erro ao deletar usuario");

    return user;
  }

  async exists(id: string) {
    if (await this.findById(id)) {
      return true;
    }

    return false;
  }
}
