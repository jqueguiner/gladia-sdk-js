import { SDK_VERSION } from '../../meta/sdk-version';
import { BrowserHttpClient } from './browser.http-client';
import { NodeHttpClient } from './node.http-client';
export function getHttpClient(params) {
    var _a, _b, _c, _d, _e;
    const factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : getHttpClientFactory();
    const baseHeaders = {
        'x-gladia-key': params.apiKey,
        'x-gladia-sdk': SDK_VERSION,
        ...((_b = params.headers) !== null && _b !== void 0 ? _b : {}),
    };
    return factory({
        baseHeaders,
        baseUrl: (_c = params.baseUrl) !== null && _c !== void 0 ? _c : 'https://v2-api.gladia.io',
        useFetch: (_d = params.useFetch) !== null && _d !== void 0 ? _d : false,
        httpClientTimeout: (_e = params.httpClientTimeout) !== null && _e !== void 0 ? _e : 300000,
    });
}
export function getHttpClientFactory() {
    if (typeof window === 'undefined' && typeof process === 'object') {
        return NodeHttpClient;
    }
    else {
        return BrowserHttpClient;
    }
}
