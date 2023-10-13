import { faker } from '@faker-js/faker';
import httpStatus from 'http-status';
import supertest from 'supertest';
import app, { init } from '@/app';
import { prisma } from '@/config';
import { cleanDb } from '../helpers';
import { duplicatedEmailError } from '@/erros';
import { createUser } from '../factories';


beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('POST /users', () => {
  it('should respond with status 400 when body is not given', async () => {
    const response = await server.post('/users');

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it('should respond with status 400 when body is not valid', async () => {
    const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

    const response = await server.post('/users').send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe('when body is valid', () => {
    const generateValidBody = () => ({
      email: faker.internet.email(),
      password: faker.internet.password(6),
    });
  });
});
