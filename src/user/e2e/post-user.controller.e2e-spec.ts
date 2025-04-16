import request from 'supertest'
import { Decimal } from "@prisma/client/runtime/library";
import { app } from "../../../test/setup-e2e";
import { defaultOwner, defaultUser } from "../../../test/utils/user-test-helper";

describe('[POST] UserController (e2e)', () => {

    test('/users - should create a user without owner and without social media', async () => {
        const response = await request(app.getHttpServer())
            .post('/users')
            .send(defaultUser)

        expect(response.status).toBe(201)
        expect(response.body).toEqual({
            data: {
                userResponse: ({
                    id: expect.stringMatching(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/),
                    name: defaultUser.name,
                    email: defaultUser.email,
                    cpf: defaultUser.cpf,
                    number: defaultUser.number,
                    profile: defaultUser.profile,
                    comissao: (new Decimal(defaultUser.comissao || 0)).toString(),
                    saldo: '0',
                    owner_id: null,
                    social_media: null,
                })
            }
        })
    });

    test('/users - should create a user with owner', async () => {
        const firstResponse = await request(app.getHttpServer())
            .post('/users')
            .send(defaultOwner)

        const ownerId = firstResponse.body.data.userResponse.id

        const userWithOwner = {
            ...defaultUser,
            owner_id: ownerId
        }

        const response = await request(app.getHttpServer())
            .post('/users')
            .send(userWithOwner)


        expect(response.status).toBe(201)
        expect(response.body).toEqual({
            data: {
                userResponse: ({
                    id: expect.stringMatching(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/),
                    name: userWithOwner.name,
                    email: userWithOwner.email,
                    cpf: userWithOwner.cpf,
                    number: userWithOwner.number,
                    profile: userWithOwner.profile,
                    comissao: (new Decimal(userWithOwner.comissao || 0)).toString(),
                    saldo: '0',
                    owner_id: ownerId,
                    social_media: null,
                })
            }
        })
    });

    test('/users - should create a user with social media', async () => {
        const userWithSocialMedia = {
            ...defaultUser,
            social_media: "https://www.instagram.com/teste"
        }

        const response = await request(app.getHttpServer())
            .post('/users')
            .send(userWithSocialMedia)

        expect(response.status).toBe(201)
        expect(response.body).toEqual({
            data: {
                userResponse: ({
                    id: expect.stringMatching(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/),
                    name: userWithSocialMedia.name,
                    email: userWithSocialMedia.email,
                    cpf: userWithSocialMedia.cpf,
                    number: userWithSocialMedia.number,
                    profile: userWithSocialMedia.profile,
                    comissao: (new Decimal(userWithSocialMedia.comissao || 0)).toString(),
                    saldo: '0',
                    owner_id: null,
                    social_media: userWithSocialMedia.social_media,
                })
            }
        })
    });

    test('/users - should create a user with owner and social media', async () => {

        const firstResponse = await request(app.getHttpServer())
            .post('/users')
            .send(defaultOwner)

        const ownerId = firstResponse.body.data.userResponse.id

        const userWithOwnerAndSocialMedia = {
            ...defaultUser,
            owner_id: ownerId,
            social_media: "https://www.instagram.com/teste"
        }

        const response = await request(app.getHttpServer())
            .post('/users')
            .send(userWithOwnerAndSocialMedia)

        expect(response.status).toBe(201)
        expect(response.body).toEqual({
            data: {
                userResponse: ({
                    id: expect.stringMatching(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/),
                    name: userWithOwnerAndSocialMedia.name,
                    email: userWithOwnerAndSocialMedia.email,
                    cpf: userWithOwnerAndSocialMedia.cpf,
                    number: userWithOwnerAndSocialMedia.number,
                    profile: userWithOwnerAndSocialMedia.profile,
                    comissao: (new Decimal(userWithOwnerAndSocialMedia.comissao || 0)).toString(),
                    saldo: '0',
                    owner_id: ownerId,
                    social_media: userWithOwnerAndSocialMedia.social_media,
                })
            }
        })
    });

    test('/users - should fail when creating repeated email', async () => {
        await request(app.getHttpServer())
            .post('/users')
            .send(defaultUser)

        const userSameEmailDifferentCpf = {
            ...defaultUser,
            cpf: "12345678901",
        }

        const response = await request(app.getHttpServer())
            .post('/users')
            .send(userSameEmailDifferentCpf)

        expect(response.status).toBe(409)
    });

    test('/users - should fail when creating repeated cpf', async () => {
        await request(app.getHttpServer())
            .post('/users')
            .send(defaultUser)

        const userSameCpfDifferentEmail = {
            ...defaultUser,
            email: "9Fb4r@example.com",
        }

        const response = await request(app.getHttpServer())
            .post('/users')
            .send(userSameCpfDifferentEmail)

        expect(response.status).toBe(409)
    });
})
