import { headerSerializer } from './header-serializer';
import { searchQueryParamSerializer } from './search-query-param-serializer';
export const FetchHttpClient = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
    return {
        async post(params) {
            var _a;
            const headers = new Headers(headerSerializer({
                ...baseHeaders,
                ...params.headers,
                'x-gladia-sdk-http-client': 'fetch',
            }));
            const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
            const responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
            const timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
            const { signal, cancelTimeoutController } = timeoutController(timeout);
            return fetch(url, {
                method: 'POST',
                headers,
                signal,
                mode: 'cors',
                body: toFetchBody(params.body),
            }).then((response) => {
                cancelTimeoutController();
                if (responseType === 'json') {
                    return response.json();
                }
                else {
                    return response.arrayBuffer();
                }
            });
        },
    };
};
function timeoutController(timeout) {
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), timeout);
    return {
        signal: abortController.signal,
        cancelTimeoutController() {
            clearTimeout(timeoutId);
        },
    };
}
function toFetchBody(body) {
    if (typeof body === 'string') {
        return body;
    }
    else if (body instanceof FormData) {
        return body;
    }
    else {
        return String(body);
    }
}
