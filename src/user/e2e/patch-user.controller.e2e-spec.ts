import { Decimal } from "@prisma/client/runtime/library";
import { app } from "../../../test/setup-e2e";
import { defaultUser } from "../../../test/utils/user-test-helper";
import request from 'supertest';

describe('[PATCH] UserController (e2e)', () => {
    test('/users/:id - should partially update a user', async () => {
        const createResponse = await request(app.getHttpServer())
            .post('/users')
            .send(defaultUser);

        const userId = createResponse.body.data.userResponse.id;

        const partialUpdateData = {
            name: "Partially Updated User",
        };

        const response = await request(app.getHttpServer())
            .patch(`/users/${userId}`)
            .send(partialUpdateData);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            data: {
                userResponse: ({
                    id: userId,
                    name: partialUpdateData.name,
                    cpf: defaultUser.cpf,
                    number: defaultUser.number,
                    profile: defaultUser.profile,
                    comissao: (new Decimal(defaultUser.comissao || 0)).toString(),
                    saldo: '0',
                    owner_id: null,
                    social_media: defaultUser.social_media || null,
                })
            }
        });
    });

    test('/users/:id - should fail when trying to patch non-existent user', async () => {
        const response = await request(app.getHttpServer())
            .patch('/users/99999999-9999-9999-9999-999999999999')
            .send({ name: "Non-existent User" });

        expect(response.status).toBe(404);
    });
});

