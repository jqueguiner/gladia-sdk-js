import axios from 'axios';
import { axiosFetchAdapter } from './axios-fetch-adapter';
import { SDK_VERSION } from '../meta/sdk-version';
export function getHttpClient(params) {
    var _a, _b, _c;
    const factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : AxiosHttpClient;
    const baseHeaders = {
        'x-gladia-key': params.apiKey,
        'x-gladia-sdk': SDK_VERSION,
        'Content-Type': 'multipart/form-data',
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
            var _a, _b;
            const headers = { ...baseHeaders, ...params.headers };
            const url = new URL(params.url, baseUrl);
            for (const [key, value] of Object.entries((_a = params.query) !== null && _a !== void 0 ? _a : {})) {
                url.searchParams.set(key, String(value));
            }
            const responseType = (_b = params.responseType) !== null && _b !== void 0 ? _b : 'json';
            const adapter = useFetch ? { adapter: await axiosFetchAdapter() } : {};
            return axios
                .post(url.toString(), params.body, { headers, responseType, ...adapter })
                .then((response) => response.data);
        },
    };
};
