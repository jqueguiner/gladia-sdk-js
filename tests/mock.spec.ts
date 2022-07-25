import { HttpClientFactory } from '../src/http-client';

export function mockHttpClient(): HttpClientFactory {
  return ({}) => ({
    post: jest.fn(() => Promise.resolve<any>('')),
  });
}

it('mock', () => {
  expect(true).toBeTruthy();
});
