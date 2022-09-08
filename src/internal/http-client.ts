import axios from 'axios';
import { axiosFetchAdapter } from './axios-fetch-adapter';
import { SDK_VERSION } from '../meta/sdk-version';
import { GladiaClientParams } from '../client/gladia-client-params';
import { searchQueryParamSerializer } from './search-query-param-serializer';

export interface PostParams {
  url: string;
  query?: Record<string, string | number | boolean>;
  body?: any;
  headers?: Record<string, string | number | boolean>;
  responseType?: 'json' | 'arraybuffer';
}

export interface HttpClient {
  post<T = string>(params: PostParams): Promise<T>;
}

export interface HttpClientFactoryParams {
  baseHeaders: Record<string, string | number | boolean>;
  baseUrl: string;
  useFetch: boolean;
  httpClientTimeout: number;
}

export type HttpClientFactory = (params: HttpClientFactoryParams) => HttpClient;

export function getHttpClient(params: GladiaClientParams) {
  const factory = params.customHttpClient ?? AxiosHttpClient;
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

const AxiosHttpClient: HttpClientFactory = ({
  baseHeaders,
  baseUrl,
  useFetch,
  httpClientTimeout,
}) => {
  return {
    async post(params) {
      const headers = { ...baseHeaders, ...params.headers };
      const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
      const responseType = params.responseType ?? 'json';
      const timeout = httpClientTimeout ?? 300_000;
      // TODO rewrite the fetch implementation (with a dedicated http client that does not use axios at all?)
      // disabled for now because of IE compatibility
      // const adapter = useFetch ? { adapter: await axiosFetchAdapter() } : {};
      const adapter = {};
      return axios
        .post(url, params.body, { headers, responseType, ...adapter, timeout })
        .then((response) => response.data);
    },
  };
};
