import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PutUpdateUser } from './dto/put-update-user.dto';
import { PatchUpdateUser } from './dto/patch-update-user.dto';
import { ResponseUserDTO } from './dto/response-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient, User } from 'src/prisma/generated/prisma/client';
import { PaginationOptions } from '../utils/types/pagination.types';
import { plainToInstance } from 'class-transformer';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) { }

  async findAll(paginationOptions: PaginationOptions) {
    let { total, items, pages, skip, take } = await this.prisma.paginate(
      this.prisma.user,
      {
        ...paginationOptions,
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
      }
    );

    const data = items.map(item => plainToInstance(ResponseUserDTO, {
      ...item,
      comissao: item.comissao !== null && item.comissao !== undefined
        ? (typeof item.comissao.toNumber === 'function'
          ? item.comissao.toNumber()
          : parseFloat(String(item.comissao)) || 0)
        : 0
    }));

    return {
      data,
      meta: { total, pages, skip, take }
    };
  }

  async findById(id: string) {
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
        created_at: true,
        updated_at: true,
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

  async create(data: CreateUserDTO) {
    const { credentials, ...userData } = data;

    return this.prisma.$transaction(async (prisma) => {

      if (await this.findByCpf(userData.cpf)) {
        throw new ConflictException('CPF já cadastrado');
      }

      const user = await prisma.user.create({ data: userData });

      const credentialsPayload = {
        ...credentials,
        user_id: user.id,
      };


      if (credentials.provider === "email") {
        await this.authService.registerLocal(credentialsPayload, prisma as PrismaClient)
      } else {
        await this.authService.registerSocial(credentialsPayload, prisma as PrismaClient)
      }

      return plainToInstance(ResponseUserDTO, {
        ...user,
        comissao: user.comissao.toString(),
      });
    });
  }

  async update(id: string, data: PutUpdateUser | PatchUpdateUser) {
    if (!(await this.exists(id)))
      throw new NotFoundException('Usuario não encontrado');

    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return user;
  }

  async delete(id: string) {
    if (!(await this.exists(id)))
      throw new NotFoundException('Usuario não encontrado');


    const user = await this.prisma.$transaction([
      this.prisma.auth.deleteMany({ where: { user_id: id } }),
      this.prisma.user.delete({ where: { id } }),
    ]);

    return user
  }

  async exists(id: string) {
    if (await this.findById(id)) {
      return true;
    }

    return false;
  }
}
