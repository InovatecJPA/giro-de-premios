import { Decimal } from '@prisma/client/runtime/library';
import { app } from '../../../test/setup-e2e';
import { defaultUser } from '../../../test/utils/user-test-helper';
import request from 'supertest';

describe('[PUT] UserController (e2e)', () => {
  test('/users/:id - should update a user', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/users')
      .send(defaultUser);

    const userId = createResponse.body.data.userResponse.id;

    const { credentials, ...userData } = defaultUser;

    const updatedUserData = {
      ...userData,
      name: 'Updated User',
    };

    const response = await request(app.getHttpServer())
      .put(`/users/${userId}`)
      .send(updatedUserData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        userResponse: {
          id: userId,
          name: updatedUserData.name,
          cpf: updatedUserData.cpf,
          number: updatedUserData.number,
          profile: updatedUserData.profile,
          comissao: new Decimal(updatedUserData.comissao || 0).toString(),
          saldo: '0',
          owner_id: null,
          social_media: updatedUserData.social_media || null,
        },
      },
    });
  });

  test('/users/:id - should fail when user does not exist', async () => {
    const { credentials, ...userData } = defaultUser

    const response = await request(app.getHttpServer())
      .put('/users/99999999-9999-9999-9999-999999999999')
      .send(userData);

    expect(response.status).toBe(404);
  });
});
