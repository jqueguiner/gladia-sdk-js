import { HttpClientFactory } from '../../src/internal/http-client';

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

export function getRandomText(): string {
  return 'fake text ' + Math.random().toString().substring(2);
}
