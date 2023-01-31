import { HttpClient, HttpClientFactory, UrlFormData } from '../../src/internal/http-client';

export function mockHttpClient(): HttpClientFactory {
  return () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export function getRandomBoolean(): boolean {
  return Math.random() < 0.5;
}

export function getRandomFloat(): number {
  return Math.round(Math.random() * 1_000 * 1_000_000) / 1_000_000;
}

export function getRandomText(): string {
  return 'fake text ' + Math.random().toString().substring(2);
}

export function getRandomArray(): string[] {
  return [getRandomText(), getRandomText()];
}

export function getRandomFromEnum<T>(values: readonly T[]): T {
  return values[Math.floor(Math.random() * values.length)];
}

export function getPostMock(httpClientMock: HttpClient) {
  const postMock = httpClientMock.post as jest.Mock;
  const firstCallArgs = postMock.mock.calls[0][0];
  const firstCallBody = (() => {
    if (typeof firstCallArgs.body === 'string') {
      if (firstCallArgs.headers['Content-Type'] === 'application/json') {
        return JSON.parse(firstCallArgs.body);
      } else {
        return new UrlFormData(firstCallArgs.body);
      }
    }
    return firstCallArgs.body;
  })();
  return { postMock, firstCallArgs, firstCallBody } as const;
}
