import axios from 'axios';
import { GladiaClientParams } from './gladia-client';

interface PostParams {
  url: string;
  query?: Record<string, string | number | boolean>;
  body?: unknown;
  headers?: Record<string, string | number | boolean>;
  responseType?: 'json' | 'arraybuffer';
}

export interface HttpClient {
  post<T = string>(params: PostParams): Promise<T>;
}

export interface HttpClientFactoryParams {
  baseHeaders: Record<string, string | number | boolean>;
  baseUrl: string;
}

export type HttpClientFactory = (params: HttpClientFactoryParams) => HttpClient;

export function getHttpClient(params: GladiaClientParams) {
  const factory = params.customHttpClient ?? AxiosHttpClient;
  const baseHeaders = {
    'x-gladia-key': params.apiKey,
    'Content-Type': 'application/json',
  };
  return factory({ baseHeaders, baseUrl: params.baseUrl ?? 'https://v2-api.gladia.io' });
}

const AxiosHttpClient: HttpClientFactory = ({ baseHeaders, baseUrl }) => {
  return {
    post(params) {
      const headers = { ...baseHeaders, ...params.headers };
      const queryPart = Object.entries(params.query ?? {})
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      const url = baseUrl + params.url + (queryPart.length > 0 ? `?${queryPart}` : '');
      const responseType = params.responseType ?? 'json';
      return axios
        .post(url, params.body, { headers, responseType })
        .then((response) => response.data);
    },
  };
};
