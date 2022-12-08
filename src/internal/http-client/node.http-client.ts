import { headerSerializer } from './header-serializer';
import { HttpClientFactory } from './http-client';
import { searchQueryParamSerializer } from './search-query-param-serializer';
import https from 'https';

export const NodeHttpClient: HttpClientFactory = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
  return {
    async post(params) {
      const headers = headerSerializer({
        ...baseHeaders,
        ...params.headers,
        'x-gladia-sdk-http-client': 'node',
      });
      const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
      const responseType = params.responseType ?? 'json';
      const timeout = httpClientTimeout ?? 300_000;
      return new Promise((resolve, reject) => {
        let body = '';
        const req = https.request(url, { method: 'POST', headers, timeout }, (res) => {
          res.on('data', (chunk) => {
            body += chunk;
          });
          res.on('end', () => {
            const buffer = Buffer.from(body);
            if (responseType === 'json') {
              resolve(JSON.parse(buffer.toString()));
            } else {
              return buffer;
            }
          });
        });

        req.on('error', (error) => {
          reject(error);
        });

        req.write(toNodeHttpsBody(params.body));
        req.end();
      });
    },
  };
};

function toNodeHttpsBody(body: unknown): BodyInit {
  if (typeof body === 'string') {
    return body as string;
  } else if (body instanceof FormData) {
    return body as FormData;
  } else {
    return String(body);
  }
}
