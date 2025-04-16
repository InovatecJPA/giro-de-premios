import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { Profiles, User } from "@prisma/client";

export type JwtAuthPayload = {
    sub: string;
    profile: Profiles
}

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService
    ) { }

    createToken(user: User) {

        const payload: JwtAuthPayload = {
            sub: user.id,
            profile: user.profile,
        }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    verifyToken(token: string) {
        try {
            return this.jwtService.verify<JwtAuthPayload>(token)
        } catch (error) {
            throw new BadRequestException('Token inválido')
        }
    }
}
