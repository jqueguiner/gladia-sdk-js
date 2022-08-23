import { HttpClientFactory } from '../internal/http-client';

export interface GladiaClientParams {
  apiKey: string;
  baseUrl?: string;
  customTimeout?: number;
  customHttpClient?: HttpClientFactory;
  useFetch?: boolean;
}
