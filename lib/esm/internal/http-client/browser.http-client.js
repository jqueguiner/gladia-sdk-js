import { FetchHttpClient } from './fetch.http-client';
import { XhrHttpClient } from './xhr.http-client';
export const BrowserHttpClient = (factoryParams) => {
    if (factoryParams.useFetch || typeof fetch == 'function') {
        return FetchHttpClient(factoryParams);
    }
    else {
        return XhrHttpClient(factoryParams);
    }
};
