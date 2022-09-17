import { faker } from '@faker-js/faker';
import axios from 'axios';

import { HttpPostParams } from '@data/protocols/http';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: { a: faker.random.words(5), b: faker.random.words(5) },
});

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
