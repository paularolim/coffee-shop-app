import { AccountModel } from '@domain/models/account-model';
import { faker } from '@faker-js/faker';
import { AuthenticationParams } from 'domain/usecases/authentication';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(8),
});

export const mockAccount = (): AccountModel => ({
  accessToken: faker.random.alphaNumeric(30),
});
