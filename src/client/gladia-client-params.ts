import { HttpClientFactory } from '../internal/http-client';

export interface GladiaClientParams {
  apiKey: string;
  baseUrl?: string;
  customHttpClient?: HttpClientFactory;
}
