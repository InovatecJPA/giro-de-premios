import { Decimal } from '@prisma/client/runtime/library';
import { app } from '../../../test/setup-e2e';
import { defaultUserLocal } from '../../../test/utils/user-test-helper';
import request from 'supertest';

describe('[PUT] UserController (e2e)', () => {
  test('/users/:id - should update a user', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/users')
      .send(defaultUserLocal);

    const userId = createResponse.body.data.userResponse.id;

    const { credentials, ...userData } = defaultUserLocal;

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
          created_at: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
          updated_at: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        },
      },
    });
  });

  test('/users/:id - should fail when user does not exist', async () => {
    const { credentials, ...userData } = defaultUserLocal

    const response = await request(app.getHttpServer())
      .put('/users/99999999-9999-9999-9999-999999999999')
      .send(userData);

    expect(response.status).toBe(404);
  });
});
