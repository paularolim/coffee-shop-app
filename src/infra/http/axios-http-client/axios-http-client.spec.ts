import { faker } from '@faker-js/faker';
import axios from 'axios';

import { HttpPostParams } from '@data/protocols/http';
import { mockAxios } from '@infra/test';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => ({ sut: new AxiosHttpClient(), mockedAxios: mockAxios() });

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: { a: faker.random.words(5), b: faker.random.words(5) },
});

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return correct status code and body', () => {
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
