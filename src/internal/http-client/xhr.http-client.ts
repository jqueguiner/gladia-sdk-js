import { headerSerializer } from './header-serializer';
import { HttpClientFactory } from './http-client';
import { searchQueryParamSerializer } from './search-query-param-serializer';

export const XhrHttpClient: HttpClientFactory = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
  return {
    async post(params) {
      const headers = new Headers(headerSerializer({ ...baseHeaders, ...params.headers }));
      const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
      const responseType = params.responseType ?? 'json';
      const timeout = httpClientTimeout ?? 300_000;

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          if (responseType === 'json') {
            resolve(JSON.parse(xhr.responseText));
          } else {
            resolve(xhr.response);
          }
        };
        xhr.ontimeout = () => reject('timeout');
        xhr.onerror = (e) => reject(e);

        xhr.timeout = timeout;
        headers.forEach((value, key) => {
          xhr.setRequestHeader(key, value);
        });
        xhr.open('POST', url);
        xhr.send(toXhrBody(params.body));
      });
    },
  };
};

function toXhrBody(body: unknown): XMLHttpRequestBodyInit {
  if (typeof body === 'string') {
    return body as string;
  } else if (body instanceof FormData) {
    return body as FormData;
  } else {
    return String(body);
  }
}
