import { faker } from '@faker-js/faker';
import axios from 'axios';

import { HttpPostParams, HttpResponse } from '@data/protocols/http';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
  status: faker.random.numeric(3),
  data: { a: faker.random.words(5), b: faker.random.words(5) },
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: { a: faker.random.words(5), b: faker.random.words(5) },
});

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return correct status code and body', async () => {
    const sut = makeSut();
    const response = await sut.post(mockPostRequest());
    expect(response.statusCode).toBe(mockedAxiosResult.status);
    expect(response.body).toBe(mockedAxiosResult.data);
  });
});
