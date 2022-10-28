import { FetchHttpClient } from './fetch.http-client';
import { HttpClientFactory } from './http-client';
import { XhrHttpClient } from './xhr.http-client';

export const BrowserHttpClient: HttpClientFactory = (factoryParams) => {
  if (factoryParams.useFetch || typeof fetch == 'function') {
    return FetchHttpClient(factoryParams);
  } else {
    return XhrHttpClient(factoryParams);
  }
};
