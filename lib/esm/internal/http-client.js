import axios from 'axios';
import { axiosFetchAdapter } from './axios-fetch-adapter';
import { SDK_VERSION } from '../meta/sdk-version';
import { searchQueryParamSerializer } from './search-query-param-serializer';
export function getHttpClient(params) {
    var _a, _b, _c;
    const factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : AxiosHttpClient;
    const baseHeaders = {
        'x-gladia-key': params.apiKey,
        'x-gladia-sdk': SDK_VERSION,
    };
    return factory({
        baseHeaders,
        baseUrl: (_b = params.baseUrl) !== null && _b !== void 0 ? _b : 'https://v2-api.gladia.io',
        useFetch: (_c = params.useFetch) !== null && _c !== void 0 ? _c : false,
    });
}
const AxiosHttpClient = ({ baseHeaders, baseUrl, useFetch }) => {
    return {
        async post(params) {
            var _a;
            const headers = { ...baseHeaders, ...params.headers };
            const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
            const responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
            const adapter = useFetch ? { adapter: await axiosFetchAdapter() } : {};
            return axios
                .post(url, params.body, { headers, responseType, ...adapter })
                .then((response) => response.data);
        },
    };
};
