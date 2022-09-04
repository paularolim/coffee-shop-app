import { faker } from '@faker-js/faker';

import { AccountModel } from '@domain/models';
import { AuthenticationParams } from '@domain/usecases';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(8),
});

export const mockAccount = (): AccountModel => ({ accessToken: faker.random.alphaNumeric(30) });
