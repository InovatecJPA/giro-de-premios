import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { PaginationOptions } from "../../utils/types/pagination.types";
import { ResponseForgotPasswordDTO } from "./dto/response-forgot-password.dto";
import { plainToInstance } from "class-transformer";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { randomBytes } from "node:crypto";

@Injectable()
export default class ForgotPasswordService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async findAll(paginationOptions: PaginationOptions) {
        const { items, pages, skip, take, total } = await this.prisma.paginate(
            this.prisma.forgotPasswordToken,
            {
                ...paginationOptions,
                select: {
                    id: true,
                    auth_id: true,
                    password_reset_token: true,
                    password_reset_token_expires: true,
                    created_at: true,
                },
            }
        )

        const data = items.map((item) => plainToInstance(ResponseForgotPasswordDTO, item))

        return {
            data,
            meta: { total, pages, skip, take },
        }
    }

    async findById(id: string) {
        return this.prisma.forgotPasswordToken.findUnique({
            where: { id },
        })
    }

    async findByToken(token: string) {
        return this.prisma.forgotPasswordToken.findUnique({
            where: { password_reset_token: token },
        })
    }

    async create(data: CreateForgotPasswordDto) {

        const dataForgotPassword = {
            ...data,
            password_reset_token: randomBytes(32).toString('hex'),
            password_reset_token_expires: new Date(Date.now() + 60 * 60 * 1000),
        }

        return this.prisma.forgotPasswordToken.create({
            data: { ...dataForgotPassword }
        })
    }
}