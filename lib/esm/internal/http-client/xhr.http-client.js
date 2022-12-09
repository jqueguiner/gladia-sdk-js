import { headerSerializer } from './header-serializer';
import { searchQueryParamSerializer } from './search-query-param-serializer';
export const XhrHttpClient = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
    return {
        async post(params) {
            var _a;
            const headers = new Headers(headerSerializer({ ...baseHeaders, ...params.headers }));
            const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
            const responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
            const timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    if (responseType === 'json') {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else {
                        resolve(xhr.response);
                    }
                };
                xhr.ontimeout = () => reject('timeout');
                xhr.onerror = (e) => reject(e);
                xhr.timeout = timeout;
                xhr.open('POST', url);
                headers.forEach((value, key) => {
                    xhr.setRequestHeader(key, value);
                });
                xhr.setRequestHeader('x-gladia-sdk-http-client', 'xhr');
                xhr.send(toXhrBody(params.body));
            });
        },
    };
};
function toXhrBody(body) {
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
