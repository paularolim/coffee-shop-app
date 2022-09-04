import { faker } from '@faker-js/faker';

import { HttpPostClientStub } from '../../test/mock-http-client';
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

    await sut.auth();

    expect(httpPostClientStub.url).toBe(url);
  });
});
