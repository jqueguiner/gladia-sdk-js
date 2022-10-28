import { SDK_VERSION } from '../../meta/sdk-version';
import { GladiaClientParams } from '../../client/gladia-client-params';
import { BrowserHttpClient } from './browser.http-client';
import { NodeHttpClient } from './node.http-client';

export type HttpClientHeaders = Record<string, string | number | boolean>;

export interface PostParams<T = unknown> {
  url: string;
  query?: Record<string, string | number | boolean>;
  body?: T;
  headers?: HttpClientHeaders;
  responseType?: 'json' | 'arraybuffer';
}

export interface HttpClient {
  post<T = string>(params: PostParams): Promise<T>;
}

export interface HttpClientFactoryParams {
  baseHeaders: HttpClientHeaders;
  baseUrl: string;
  useFetch: boolean;
  httpClientTimeout: number;
}

export type HttpClientFactory = (params: HttpClientFactoryParams) => HttpClient;

export function getHttpClient(params: GladiaClientParams) {
  const factory = params.customHttpClient ?? getHttpClientFactory();
  const baseHeaders = {
    'x-gladia-key': params.apiKey,
    'x-gladia-sdk': SDK_VERSION,
    ...(params.headers ?? {}),
  };
  return factory({
    baseHeaders,
    baseUrl: params.baseUrl ?? 'https://v2-api.gladia.io',
    useFetch: params.useFetch ?? false,
    httpClientTimeout: params.httpClientTimeout ?? 300_000,
  });
}

export function getHttpClientFactory() {
  if (typeof window === 'undefined' && typeof process === 'object') {
    return NodeHttpClient;
  } else {
    return BrowserHttpClient;
  }
}
