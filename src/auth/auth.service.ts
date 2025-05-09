import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import bcrypt from 'bcryptjs';
import { Auth, PrismaClient, Profiles, User } from 'src/prisma/generated/prisma/client';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { PaginationOptions } from '../utils/types/pagination.types';
import { AuthResponseSchema } from './dto/auth-response.dto';
import { EmailOptions, MailService } from '../mail/mail.service';
import { randomBytes } from 'crypto';
import ForgotPasswordService from './forgot-password/forgot-password.service';
import { Cron } from '@nestjs/schedule';
import { permission } from 'process';

export type JwtAuthPayload = {
  sub: string;
  profile: Profiles;
  isVerified: boolean;
  permissions: string[]
};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private mailService: MailService,
    private forgotPasswordService: ForgotPasswordService,
    private prisma: PrismaService,
  ) { }
  async findAll(paginationOptions: PaginationOptions) {
    const { items, meta } = await this.prisma.paginate(
      this.prisma.auth,
      {
        ...paginationOptions,
      }
    );

    const data = AuthResponseSchema.array().parse(items);

    return {
      items: data,
      meta,
    };
  }

  async findByUserId(
    user_id: string,
    paginationOptions: PaginationOptions,
  ) {
    const { items, meta } = await this.prisma.paginate(
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

    const data = items.map((item) => AuthResponseSchema.parse(item));

    return {
      items: data,
      meta,
    };
  }

  async findById(id: string) {
    return await this.prisma.auth.findUnique({
      where: { id },
      select: {
        id: true,
        provider: true,
        provider_user_id: true,
        is_verified: true,
        activation_token: true,
        expiration_date: true,
        user_id: true,
        created_at: true,
        updated_at: true,
        password_hash: true,

      },
    });
  }

  // async update(id: string, data: Partial<Auth>): Promise<Auth> {
  //     return await this.prisma.auth.update({ where: { id }, data })
  // }

  async delete(id: string): Promise<Auth> {
    return await this.prisma.auth.delete({ where: { id } });
  }

  createToken(user: User, isVerified: boolean, permissions?: string[]) {
    const payload: JwtAuthPayload = {
      sub: user.id,
      profile: user.profile,
      isVerified,
      permissions: permissions || [],
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
      throw new ConflictException('Email já cadastrado');
    }

    let activation_token = '';
    let tokenExists = true;

    while (tokenExists) {
      activation_token = randomBytes(32).toString('hex');

      const auth = await this.findByToken(activation_token);
      tokenExists = !!auth;
    }


    const dataWithoutPasswordAndUsername = {
      ...data,
      password_hash: await bcrypt.hash(data.password, 10),
      activation_token,
      expiration_date: new Date(Date.now() + 24 * 60 * 60 * 1000),
      username: undefined,
      password: undefined,
    };

    const auth = await db.auth.create({
      data: dataWithoutPasswordAndUsername,
    });

    const mailData: EmailOptions = {
      to: data.provider_user_id,
      subject: 'Confirmação de cadastro',
      template: 'activation-account',
      context: {
        username: data.username,
        siteName: process.env.PROJECT_NAME,
        activationLink: process.env.ACTIVATION_LINK + `?token=${activation_token}`,
        supportEmail: process.env.SUPPORT_EMAIL,
      },
    }

    this.mailService.sendMail(mailData);

    return auth;
  }

  async registerSocial(data: AuthRegisterDto, prisma?: PrismaClient) {
    const db = prisma || this.prisma;
    let permissions: string[] = [];

    // user = findUser(data.user_id)
    // permissions = findPermissions(user.profiles)


    const authExists = await this.findByProviderAndProviderUserId(
      data.provider_user_id,
      data.provider,
    );

    if (authExists) {
      return this.createToken(authExists.User, authExists.is_verified, permissions);
    }

    const emailExists = await this.findByEmail(data.provider_user_id);

    if (emailExists.length > 0) {
      emailExists.forEach((item) => {
        if (item.provider === 'email') {
          if (!item.is_verified) {

            throw new BadRequestException(
              'Email já cadastrado não verificado, verifique a conta e tente novamente ou entre em contato com o suporte',);
          }
          data.user_id = item.user_id;
        }
      })
    }

    const auth = await db.auth.create({
      data: { ...data, is_verified: true },
    });

    return auth;
  }

  async findByProviderAndProviderUserId(
    provider_user_id: string,
    provider: string,
  ) {
    const auth = await this.prisma.auth.findUnique({
      where: {
        provider_user_id_provider: {
          provider_user_id,
          provider,
        }
      },
      include: { User: true },
    });

    return auth;
  }

  async findByEmail(email: string) {
    const auth = await this.prisma.auth.findMany({
      where: {
        provider_user_id: email,
      },
    });

    return auth;
  }

  async findByToken(token: string) {
    return this.prisma.auth.findUnique({
      where: {
        activation_token: token,
      }
    });
  }

  async login(data: AuthLoginDto) {
    let permissions: string[] = [];

    const auth = await this.findByProviderAndProviderUserId(
      data.provider_user_id,
      data.provider,
    )

    if (!auth) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (data.provider === 'email') {
      if (!this.isPasswordValid(auth, data.password))
        throw new UnauthorizedException('Credenciais inválidas');
    }


    // permissions = findPermissions(auth.User.profile)

    return this.createToken(auth.User, auth.is_verified, permissions);
  }

  async isPasswordValid(auth: Auth, password: string) {
    if (!auth.password_hash) return false;
    return await bcrypt.compare(password, auth.password_hash);
  }

  async resetPassword(id: string, oldPassword: string, newPassword: string) {
    const auth = await this.findById(id);

    if (!auth) throw new NotFoundException('Usuario nao encontrado');

    if (!this.isPasswordValid(auth, oldPassword))
      throw new UnauthorizedException('Credenciais inválidas');

    return this.prisma.auth.update({
      where: { id },
      data: { password_hash: await bcrypt.hash(newPassword, 10) },
    });
  }

  async activate(token: string) {
    const auth = await this.findByToken(token);

    if (!auth) {
      throw new BadRequestException('Token inválido');
    }

    return this.prisma.auth.update({
      where: { id: auth.id },
      data: { is_verified: true },
    });
  }

  async forgotPassword(email: string) {
    const auth = await this.findByProviderAndProviderUserId(email, 'email');

    if (!auth) {
      throw new BadRequestException('Email nao cadastrado');
    }

    const forgotPassword = await this.forgotPasswordService.create({ auth_id: auth.id });

    const mailData: EmailOptions = {
      to: email,
      subject: 'Recuperação de senha',
      template: 'forgot-password',
      context: {
        siteName: process.env.PROJECT_NAME,
        forgotPasswordLink: process.env.FORGOT_PASSWORD_LINK + `?token=${forgotPassword.password_reset_token}`,
        supportEmail: process.env.SUPPORT_EMAIL,
      },
    }

    this.mailService.sendMail(mailData);
  }

  async resetForgotPassword(token: string, newPassword: string) {
    const forgotPassword = await this.forgotPasswordService.findByToken(token);

    if (!forgotPassword) {
      throw new BadRequestException('Token inválido');
    }

    if (!this.forgotPasswordService.isTokenValid(forgotPassword)) {
      throw new BadRequestException('Token invalido');
    }

    return this.prisma.auth.update({
      where: { id: forgotPassword.auth_id },
      data: { password_hash: await bcrypt.hash(newPassword, 10) },
    });
  }

  @Cron('0 */10 * * * *')
  async deleteExpiredTokens() {
    const logger = new Logger('DeleteExpiredTokens');
    let deletedCount = 0;

    try {
      while (true) {
        const result = await this.prisma.auth.deleteMany({
          where: {
            expiration_date: {
              lte: new Date(),
            },
            is_verified: false,
          },
        });

        deletedCount += result.count;

        if (result.count === 0) {
          break;
        }
      }

      logger.log(`Deleted ${deletedCount} expired tokens`);

      return { count: deletedCount };
    } catch (error) {
      logger.error(`Failed to delete expired tokens: ${error.message}`);
      throw error;
    }
  }
}

