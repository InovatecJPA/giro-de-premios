import { INestApplication } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppModule } from "../app.module";
import { Test } from "@nestjs/testing";
import { Profiles } from "@prisma/client";
import request from 'supertest'
import { ResponseUserDTO } from "./dto/response-user.dto";
import { Decimal } from "@prisma/client/runtime/library";

describe('UserController (e2e)', () => {
    let app: INestApplication
    let prisma: PrismaService

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();
        prisma = module.get<PrismaService>(PrismaService)

        await app.init()
    })

    test('[POST] /users - should create a user', async () => {
        const userBody = {
            name: "Teste",
            email: "teste1@example.com",
            cpf: "11111111112",
            number: "111111111111",
            profile: Profiles.influencer,
            comissao: "0.10",
            password: "Inova@123"
        }

        const response = await request(app.getHttpServer())
            .post('/users')
            .send(userBody)

        console.log(response)
        console.log(JSON.stringify(response.body, null, 2))

        expect(response.status).toBe(201)
        expect(response.body).toEqual({
            data: {
                userResponse: expect.objectContaining({
                    id: expect.any(String),
                    name: userBody.name,
                    email: userBody.email,
                    cpf: userBody.cpf,
                    number: userBody.number,
                    profile: userBody.profile,
                    comissao: expect.any(String),
                    saldo: (0),
                    owner_id: expect.anything,
                    social_media: expect.any,
                })
            }
        })
    });
})
