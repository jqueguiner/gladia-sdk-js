import { HttpClient, HttpClientFactory } from '../../src/internal/http-client';
import { UrlFormData } from '../../src/internal/url-form-data';

export function mockHttpClient(): HttpClientFactory {
  return ({}) => ({
    post: jest.fn(() => Promise.resolve<any>('')),
  });
}

type Primitive = number | string | boolean | symbol | Date;
type DeepPartial<T> = { [K in keyof T]?: T[K] extends Primitive ? T[K] : DeepPartial<T[K]> };

export function p<T>(x: DeepPartial<T>): T {
  return x as unknown as T;
}

export function getRandomInt(): number {
  return Math.round(Math.random() * 1_000);
}

export function getRandomFloat(): number {
  return Math.round(Math.random() * 1_000 * 1_000_000) / 1_000_000;
}

export function getRandomText(): string {
  return 'fake text ' + Math.random().toString().substring(2);
}

export function getPostMock(httpClientMock: HttpClient) {
  const postMock = httpClientMock.post as jest.Mock;
  const firstCallArgs = postMock.mock.calls[0][0];
  const firstCallBody = (() => {
    if (typeof firstCallArgs.body === 'string') {
      return new UrlFormData(firstCallArgs.body);
    }
    return firstCallArgs.body;
  })();
  return { postMock, firstCallArgs, firstCallBody } as const;
}
