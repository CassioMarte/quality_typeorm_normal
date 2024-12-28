import { createApp } from "../app";
import request from 'supertest';
import { Express } from 'express';
import { AppDataSource } from '../database/datasource';

let app: Express;

beforeAll(async () => {
  await AppDataSource.initialize();
  app = await createApp();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('User Router', () => {
  beforeEach(async () => {
    const entities = AppDataSource.entityMetadatas;
    for (const entity of entities) {
      const repository = AppDataSource.getRepository(entity.name);
      await repository.clear();
    }
  });

  it('must save a new user in the user table', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Teste',
        email: 'teste@teste.com',
        phone: '51999999999'
      });
   
    expect(response.status).toBe(201);
  });
});