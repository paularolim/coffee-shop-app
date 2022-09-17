import { faker } from '@faker-js/faker';
import axios from 'axios';

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    status: faker.random.numeric(3),
    data: { a: faker.random.words(5), b: faker.random.words(5) },
  });
  return mockedAxios;
};
