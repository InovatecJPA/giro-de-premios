
import request from 'supertest';
import { User } from '../../prisma/generated/prisma/client';
import { defaultOwner, defaultUserLocal } from '../../../test/utils/user-test-helper';
import { app } from '../../../test/setup-e2e';

describe('AuthController (e2e)', () => {
    let authToken: string;
    let createdUsers: User[] = [];

    beforeEach(async () => {
        const user1Response = await request(app.getHttpServer())
            .post('/users')
            .send(defaultUserLocal);
        const user2Response = await request(app.getHttpServer())
            .post('/users')
            .send(defaultOwner);
        createdUsers.push(user1Response.body.data.userResponse);
        createdUsers.push(user2Response.body.data.userResponse);

        const loginResponse = await request(app.getHttpServer())
            .post('/auth/login')
            .send({
                provider_user_id: 'teste@example.com',
                provider: 'email',
                password: 'Inova@123',
            });

        authToken = loginResponse.body.access_token;
    });

    afterEach(async () => {
        createdUsers = [];
        authToken = '';
    });


    describe('GET /auth/protected', () => {
        it('should access protected route with token (200)', async () => {
            const response = await request(app.getHttpServer())
                .get('/auth/protected')
                .set('Authorization', `Bearer ${authToken}`);

            expect(response.status).toBe(200)
            expect(response.body.auth).toEqual(
                expect.objectContaining({
                    exp: expect.any(Number),
                    iat: expect.any(Number),
                    isVerified: expect.any(Boolean),
                    profile: expect.any(String),
                    sub: expect.any(String),
                })
            )
        });
    });

    describe('GET /auth', () => {
        it('should return paginated auth records (200)', async () => {
            const response = await request(app.getHttpServer())
                .get('/auth')
                .query({ page: 1, limit: 10 })

            expect(response.status).toBe(200);
            expect(response.body.data.items).toBeInstanceOf(Array);
            expect(response.body.data.items[0]).toEqual(
                expect.objectContaining({
                    id: expect.any(String),
                    provider: expect.any(String),
                    provider_user_id: expect.any(String),
                    is_verified: expect.any(Boolean),
                    user_id: expect.any(String),
                    created_at: expect.any(String),
                    updated_at: expect.any(String),
                })
            )
            expect(response.body.data.meta).toMatchObject({
                itemCount: expect.any(Number),
                totalItems: expect.any(Number),
                totalPages: expect.any(Number),
                currentPage: expect.any(Number),
                itemsPerPage: expect.any(Number),
            });
        });

    });

    describe('GET /auth/user/:userId', () => {
        it('should return auth records by user ID with pagination (200)', async () => {
            const userId = createdUsers[0].id;

            const response = await request(app.getHttpServer())
                .get(`/auth/user/${userId}`)
                .query({ page: 1, limit: 10 })

            expect(response.status).toBe(200);
            expect(response.body.data.items).toBeInstanceOf(Array);
            response.body.data.items.forEach((item) => {
                expect(item.user_id).toBe(userId);
            })
            expect(response.body.data.meta).toMatchObject({
                itemCount: expect.any(Number),
                totalItems: expect.any(Number),
                totalPages: expect.any(Number),
                currentPage: expect.any(Number),
                itemsPerPage: expect.any(Number),
            });


        });

        it('should return not found for non-existent user (404)', async () => {
            const response = await request(app.getHttpServer())
                .get('/auth/user/non-existent-id')

            expect(response.status).toBe(404);
        });
    });

    describe('GET /auth/provider/:provider/provider-user/:providerUserId', () => {
        it('should return auth by provider email and provider user ID (200)', async () => {
            const provider = 'email';
            const providerUserId = 'teste@example.com';

            const response = await request(app.getHttpServer())
                .get(`/auth/provider/${provider}/provider-user/${providerUserId}`)

            expect(response.status).toBe(200);
            expect(response.body.data.authResponseDto).toEqual(
                expect.objectContaining({
                    id: expect.any(String),
                    provider: expect.any(String),
                    provider_user_id: expect.any(String),
                    is_verified: expect.any(Boolean),
                    user_id: expect.any(String),
                    created_at: expect.any(String),
                    updated_at: expect.any(String),
                })
            )

        });

        it('should return not found for non-existent combination (404)', async () => {
            const response = await request(app.getHttpServer())
                .get('/auth/provider/invalid/provider-user/invalid')

            expect(response.status).toBe(404);
        });
    });

    describe('GET /auth/email/:email', () => {
        it('should return an auth list by email (200)', async () => {
            const email = 'teste@example.com';

            const response = await request(app.getHttpServer())
                .get(`/auth/email/${email}`)

            expect(response.status).toBe(200);
            expect(response.body.data).toBeInstanceOf(Array);
            response.body.data.forEach((item) => {
                expect(item.provider_user_id).toBe(email);
            })
        });

        it('should return not found for non-existent email (404)', async () => {
            const response = await request(app.getHttpServer())
                .get('/auth/email/nonexistent@example.com')

            expect(response.status).toBe(404);
        });
    });


    describe('GET /auth/:id', () => {
        it('should return auth by ID (200)', async () => {
            const responseGetAll = await request(app.getHttpServer())
                .get(`/auth`)

            const authId = responseGetAll.body.data.items[0].id

            const response = await request(app.getHttpServer())
                .get(`/auth/${authId}`)

            expect(response.status).toBe(200);
            expect(response.body.data.authResponseDto).toEqual(
                expect.objectContaining({
                    id: authId,
                    provider: expect.any(String),
                    provider_user_id: expect.any(String),
                    is_verified: expect.any(Boolean),
                    user_id: expect.any(String),
                    created_at: expect.any(String),
                    updated_at: expect.any(String),
                })
            )
        });

        it('should return not found for non-existent ID (404)', async () => {
            const response = await request(app.getHttpServer())
                .get('/auth/non-existent-id')

            expect(response.status).toBe(404);
        });


    });
});