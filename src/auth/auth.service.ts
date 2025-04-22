import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import bcrypt from 'bcryptjs';
import { Auth, PrismaClient, Profiles, User } from 'src/prisma/generated/prisma/client';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { PaginationOptions } from '../utils/types/pagination.types';
import { AuthResponseDto } from './dto/auth-response.dto';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';

export type JwtAuthPayload = {
  sub: string;
  profile: Profiles;
  isVerified: boolean;
};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}
  async findAll(paginationOptions: PaginationOptions) {
    const {items, pages, skip, take, total} = await this.prisma.paginate(
      this.prisma.auth,
      {
        ...paginationOptions,
        select: {
          id: true,
          provider: true,
          provider_user_id: true,
          is_verified: true,
          user_id: true,
          created_at: true,
          updated_at: true,
          password_hash: false,
        },
      }
    );

    const data = plainToInstance(AuthResponseDto, items);

    return {
      data,
      meta: { total, pages, skip, take },
    };
  }

  async findByUserId(
    user_id: string,
    paginationOptions: PaginationOptions,
  ) {
    const {items, pages, skip, take, total} = await this.prisma.paginate(
      this.prisma.auth, 
      {
        where: { user_id },
        select: {
          id: true,
          provider: true,
          provider_user_id: true,
          is_verified: true,
          user_id: true,
          created_at: true,
          updated_at: true,
          password_hash: false,
        },
        ...paginationOptions
      }
    )

    const data = plainToInstance(AuthResponseDto, items);

    return {
      data,
      meta: { total, pages, skip, take },
    };
  }

  async findById(id: string): Promise<AuthResponseDto | null> {
    return await this.prisma.auth.findUnique({
      where: { id },
      select: {
        id: true,
        provider: true,
        provider_user_id: true,
        is_verified: true,
        user_id: true,
        created_at: true,
        updated_at: true,
        password_hash: false,
      },
    });
  }

  // async update(id: string, data: Partial<Auth>): Promise<Auth> {
  //     return await this.prisma.auth.update({ where: { id }, data })
  // }

  async delete(id: string): Promise<Auth> {
    return await this.prisma.auth.delete({ where: { id } });
  }

  createToken(user: User, isVerified: boolean) {
    const payload: JwtAuthPayload = {
      sub: user.id,
      profile: user.profile,
      isVerified,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify<JwtAuthPayload>(token);
    } catch (error) {
      throw new BadRequestException('Token inválido');
    }
  }

  isValidToken(token: string) {
    try {
      return this.jwtService.verify<JwtAuthPayload>(token);
    } catch (error) {
      return false;
    }
  }

  async registerLocal(data: AuthRegisterDto, prisma?: PrismaClient) {
    const db = prisma || this.prisma;

    const authExists = await this.findByProviderAndProviderUserId(
      data.provider_user_id,
      data.provider,
    );

    if (authExists) {
      throw new BadRequestException('Email já cadastrado');
    }

    const dataWithoutPassword = {
      ...data,
      password_hash: await bcrypt.hash(data.password, 10),
      password: undefined,
    };

    const auth = await db.auth.create({
      data: dataWithoutPassword,
    });

    return auth;
  }

  async registerSocial(data: AuthRegisterDto, prisma?: PrismaClient) {
    const db = prisma || this.prisma;

    const authExists = await this.findByProviderAndProviderUserId(
      data.provider_user_id,
      data.provider,
    );

    if (authExists) {
      return this.createToken(authExists.User, authExists.is_verified);
    }

    const emailExists = await this.findByEmail(data.provider_user_id);

    if (emailExists) {
      if (emailExists.provider === 'email') {
        if (!emailExists.is_verified)
          throw new BadRequestException(
            'Email já cadastrado não verificado, verifique a conta e tente novamente ou entre em contato com o suporte',
          );

        data.user_id = emailExists.user_id;
      }
    }

    const auth = await db.auth.create({
      data: {...data, is_verified: true},
    });

    return auth;
  }

  async findByProviderAndProviderUserId(
    provider_user_id: string,
    provider: string,
  ) {
    const auth = await this.prisma.auth.findUnique({
      where: {
        provider_user_id,
        provider,
      },
      include: { User: true },
    });

    return auth;
  }

  async findByEmail(email: string) {
    const auth = await this.prisma.auth.findUnique({
      where: {
        provider_user_id: email,
      },
    });

    return auth;
  }

  async login(data: AuthLoginDto) {
    const auth = await this.prisma.auth.findUnique({
      where: {
        provider_user_id: data.provider_user_id,
        provider: data.provider,
      },
      include: { User: true },
    });

    if (!auth) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (data.provider === 'email') {
      if (!this.isPasswordValid(auth, data.password))
        throw new UnauthorizedException('Credenciais inválidas');
    }

    return this.createToken(auth.User, auth.is_verified);
  }

  async isPasswordValid(auth: Auth, password: string) {
    if (!auth.password_hash) return false;
    return await bcrypt.compare(password, auth.password_hash);
  }
  //TODO
  async forgotPassword() {}

  //TODO
  async resetPassword() {}
}
