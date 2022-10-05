import axios from 'axios';
// import { axiosFetchAdapter } from './axios-fetch-adapter';
import { SDK_VERSION } from '../meta/sdk-version';
import { searchQueryParamSerializer } from './search-query-param-serializer';
export function getHttpClient(params) {
    var _a, _b, _c, _d, _e;
    const factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : AxiosHttpClient;
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
const AxiosHttpClient = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
    return {
        async post(params) {
            var _a;
            const headers = { ...baseHeaders, ...params.headers };
            const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
            const responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
            const timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
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
