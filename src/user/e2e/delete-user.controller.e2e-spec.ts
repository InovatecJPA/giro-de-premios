import { app } from "../../../test/setup-e2e";
import { defaultUser } from "../../../test/utils/user-test-helper";
import request from 'supertest'

describe('[DELETE] UserController (e2e)', () => {
    test('/users/:id - should delete a user', async () => {
        const createUserResponse = await request(app.getHttpServer())
            .post('/users')
            .send(defaultUser);

        const userId = createUserResponse.body.data.userResponse.id;

        const response = await request(app.getHttpServer())
            .delete(`/users/${userId}`);

        expect(response.status).toBe(204);
    });

    test('/users/:id - should fail when trying to delete non-existent user', async () => {
        const response = await request(app.getHttpServer())
            .delete('/users/99999999-9999-9999-9999-999999999999');

        expect(response.status).toBe(404);
    });
});
