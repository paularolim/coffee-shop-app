import { HttpPostClient } from '../../protocols/http/http-post-client';
import { HttpPostClientStub } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

interface SutTypes {
  httpPostClientStub: HttpPostClient;
  sut: RemoteAuthentication;
}

const makeHttpPostClient = (): HttpPostClient => new HttpPostClientStub();

const makeSut = (url: string): SutTypes => {
  const httpPostClientStub = makeHttpPostClient();
  const sut = new RemoteAuthentication(url, httpPostClientStub);

  return { httpPostClientStub, sut };
};

describe('RemoteAuthentication', () => {
  it('should call HttpPostClient with correct url', async () => {
    const url = 'any_url';
    const { sut, httpPostClientStub } = makeSut(url);

    await sut.auth();

    expect(httpPostClientStub.url).toBe(url);
  });
});
