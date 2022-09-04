import { HttpStatusCode } from '@data/protocols/http';
import { UnexpectedError, InvalidCredentialsError } from '@domain/errors';
import { faker } from '@faker-js/faker';
import { HttpPostClientStub } from '@data/test';
import { mockAccount, mockAuthentication } from '@domain/test';
import { AuthenticationParams } from '@domain/usecases';
import { AccountModel } from '@domain/models';
import { RemoteAuthentication } from './remote-authentication';

interface SutTypes {
  httpPostClientStub: HttpPostClientStub<AuthenticationParams, AccountModel>;
  sut: RemoteAuthentication;
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientStub = new HttpPostClientStub<AuthenticationParams, AccountModel>();
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

  it('should return an AccountModel if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientStub } = makeSut();

    const httpResult = mockAccount();
    httpPostClientStub.response = { statusCode: HttpStatusCode.ok, body: httpResult };

    const account = await sut.auth(mockAuthentication());
    expect(account).toEqual(httpResult);
  });

  it('should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientStub } = makeSut();
    httpPostClientStub.response = { statusCode: HttpStatusCode.unauthorized };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  it('should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientStub } = makeSut();
    httpPostClientStub.response = { statusCode: HttpStatusCode.badRequest };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientStub } = makeSut();
    httpPostClientStub.response = { statusCode: HttpStatusCode.notFound };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientStub } = makeSut();
    httpPostClientStub.response = { statusCode: HttpStatusCode.serverError };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
