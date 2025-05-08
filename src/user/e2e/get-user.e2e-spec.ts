import request from 'supertest';
import { Decimal } from '@prisma/client/runtime/library';
import { app } from '../../../test/setup-e2e';
import {
    defaultOwner,
    defaultUserLocal,
} from '../../../test/utils/user-test-helper';
import { User } from '../../prisma/generated/prisma/client';

describe('[GET] UserController (e2e)', () => {
    let createdUsers: User[] = [];

    afterEach(async () => {
        createdUsers = [];
    });

    describe('GET /users', () => {
        beforeEach(async () => {
            const user1Response = await request(app.getHttpServer())
                .post('/users')
                .send(defaultUserLocal);
            const user2Response = await request(app.getHttpServer())
                .post('/users')
                .send(defaultOwner);
            createdUsers.push(user1Response.body.data.userResponse);
            createdUsers.push(user2Response.body.data.userResponse);
        });

        test('should return all users with default pagination', async () => {
            const response = await request(app.getHttpServer()).get('/users');

            expect(response.status).toBe(200);
            expect(response.body.data).toHaveProperty('items');
            expect(response.body.data).toHaveProperty('meta');
            expect(response.body.data.items).toHaveLength(2);

            const returnedUserIds = response.body.data.items.map(item => item.id);
            const createdUserIds = createdUsers.map(user => user.id);
            expect(returnedUserIds.sort()).toEqual(createdUserIds.sort());

            for (const createdUser of createdUsers) {
                const returnedUser = response.body.data.items.find(item => item.id === createdUser.id);
                expect(returnedUser).toEqual({
                    id: createdUser.id,
                    name: createdUser.name,
                    cpf: createdUser.cpf,
                    number: createdUser.number,
                    profile: createdUser.profile,
                    saldo: createdUser.saldo,
                    comissao: createdUser.comissao,
                    owner_id: createdUser.owner_id,
                    social_media: createdUser.social_media,
                    created_at: createdUser.created_at,
                    updated_at: createdUser.updated_at,
                });
            }

            expect(response.body.data.meta).toMatchObject({
                itemCount: 2,
                totalItems: 2,
                totalPages: 1,
                currentPage: 1,
                itemsPerPage: 10,
            });
        });

        test('should respect pagination parameters', async () => {
            const additionalUsers: User[] = [];
            for (let i = 0; i < 5; i++) {
                const userData = {
                    ...defaultUserLocal,
                    cpf: `1234567890${i}`,
                    credentials: {
                        ...defaultUserLocal.credentials,
                        provider_user_id: `user${i}@test.com`,
                    },
                };

                const response = await request(app.getHttpServer())
                    .post('/users')
                    .send(userData);

                additionalUsers.push(response.body.data.userResponse);
            }

            // Total should be 7 users (2 from beforeEach + 5 new ones)
            const totalUsers = 7;
            const pageSize = 3;

            const page1Response = await request(app.getHttpServer())
                .get('/users')
                .query({ page: 1, limit: pageSize });

            expect(page1Response.status).toBe(200);
            expect(page1Response.body.data.items).toHaveLength(pageSize);
            expect(page1Response.body.data.meta).toMatchObject({
                itemCount: pageSize,
                totalItems: totalUsers,
                currentPage: 1,
                itemsPerPage: pageSize,
                totalPages: Math.ceil(totalUsers / pageSize)
            });

            const page2Response = await request(app.getHttpServer())
                .get('/users')
                .query({ page: 2, limit: pageSize });

            expect(page2Response.status).toBe(200);
            expect(page2Response.body.data.items).toHaveLength(pageSize);
            expect(page2Response.body.data.meta.currentPage).toBe(2);

            const page1Ids = new Set(page1Response.body.data.items.map(u => u.id));
            const page2Ids = new Set(page2Response.body.data.items.map(u => u.id));
            const intersection = [...page1Ids].filter(id => page2Ids.has(id));
            expect(intersection).toHaveLength(0);

            const page3Response = await request(app.getHttpServer())
                .get('/users')
                .query({ page: 3, limit: pageSize });

            expect(page3Response.status).toBe(200);
            expect(page3Response.body.data.items).toHaveLength(totalUsers - (2 * pageSize)); // 1 remaining user
            expect(page3Response.body.data.meta.currentPage).toBe(3);
        });

        test('should handle empty results when page exceeds limit', async () => {
            const response = await request(app.getHttpServer())
                .get('/users')
                .query({ page: 999, limit: 10 });

            expect(response.status).toBe(200);
            expect(response.body.data.items).toHaveLength(0);
            expect(response.body.data.meta.totalItems).toBe(2);
        });
    });

    describe('GET /users/:id', () => {
        let createdUserId: string;

        beforeEach(async () => {
            const createResponse = await request(app.getHttpServer())
                .post('/users')
                .send(defaultUserLocal);
            createdUserId = createResponse.body.data.userResponse.id;
        });

        test('should return a user by id', async () => {
            const response = await request(app.getHttpServer())
                .get(`/users/${createdUserId}`);

            expect(response.status).toBe(200);
            expect(response.body.data.users).toEqual({
                id: createdUserId,
                name: defaultUserLocal.name,
                cpf: defaultUserLocal.cpf,
                number: defaultUserLocal.number,
                profile: defaultUserLocal.profile,
                saldo: '0',
                comissao: new Decimal(defaultUserLocal.comissao || 0).toString(),
                owner_id: null,
                social_media: null,
                created_at: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
                updated_at: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
            });
        });

        test('should return 404 for non-existent user', async () => {
            const nonExistentId = '00000000-0000-0000-0000-000000000000';
            const response = await request(app.getHttpServer())
                .get(`/users/${nonExistentId}`);

            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('message');
        });
    });

});