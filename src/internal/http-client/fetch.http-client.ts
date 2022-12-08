import { headerSerializer } from './header-serializer';
import { HttpClientFactory } from './http-client';
import { searchQueryParamSerializer } from './search-query-param-serializer';

export const FetchHttpClient: HttpClientFactory = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
  return {
    async post(params) {
      const headers = new Headers(
        headerSerializer({
          ...baseHeaders,
          ...params.headers,
          'x-gladia-sdk-http-client': 'fetch',
        }),
      );
      const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
      const responseType = params.responseType ?? 'json';
      const timeout = httpClientTimeout ?? 300_000;
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
        } else {
          return response.arrayBuffer();
        }
      });
    },
  };
};

function timeoutController(timeout: number) {
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), timeout);
  return {
    signal: abortController.signal,
    cancelTimeoutController() {
      clearTimeout(timeoutId);
    },
  };
}

function toFetchBody(body: unknown): BodyInit {
  if (typeof body === 'string') {
    return body as string;
  } else if (body instanceof FormData) {
    return body as FormData;
  } else {
    return String(body);
  }
}
