import { faker } from '@faker-js/faker';
import { HttpPostClientStub } from 'data/test/mock-http-client';
import { mockAuthentication } from 'domain/test/mock-authentication';
import { RemoteAuthentication } from './remote-authentication';

interface SutTypes {
  httpPostClientStub: HttpPostClientStub;
  sut: RemoteAuthentication;
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientStub = new HttpPostClientStub();
  const sut = new RemoteAuthentication(url, httpPostClientStub);

  return { httpPostClientStub, sut };
};

describe('RemoteAuthentication', () => {
  it('should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientStub } = makeSut(url);

    await sut.auth(mockAuthentication());

    expect(httpPostClientStub.url).toBe(url);
  });

  it('should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientStub } = makeSut();

    const authenticationParams = mockAuthentication();

    await sut.auth(authenticationParams);

    expect(httpPostClientStub.body).toEqual(authenticationParams);
  });
});
