/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-var-requires */
import type { Readable } from 'stream';
import { headerSerializer } from './header-serializer';
import { HttpClientFactory } from './http-client';
import { searchQueryParamSerializer } from './search-query-param-serializer';
import { isDefined } from '../../utils/fp';

export const NodeHttpClient: HttpClientFactory = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
  const http = require('http');
  const https = require('https');
  return {
    async post(params) {
      const [formattedBody, formHeaders] = toNodeHttpsBody(params.body);
      const headers = headerSerializer({
        ...baseHeaders,
        ...params.headers,
        'x-gladia-sdk-http-client': 'node',
        ...(formHeaders ?? {}),
      });
      const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
      const responseType = params.responseType ?? 'json';
      const timeout = httpClientTimeout ?? 300_000;
      return new Promise((resolve, reject) => {
        let body = '';
        const req = (baseUrl.startsWith('https') ? https : http).request(
          url,
          { method: 'POST', headers, timeout },
          (res: any) => {
            res.on('data', (chunk: any) => {
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
          },
        );

        req.on('error', (error: any) => {
          reject(error);
        });

        if (isDefined(formHeaders)) {
          (formattedBody as any).pipe(req);
        } else {
          req.write(formattedBody);
          req.end();
        }
      });
    },
  };
};

function toNodeHttpsBody(
  body: unknown,
): [BodyInit, null] | [Readable, Record<string, string | number>] {
  const { FormData } = require('formdata-polyfill/esm.min.js');
  if (typeof body === 'string') {
    return [body, null];
  } else if (body instanceof FormData) {
    const { Readable } = require('stream');
    const { formDataToBlob } = require('formdata-polyfill/esm.min.js');
    const blob = formDataToBlob(body);
    const stream = Readable.from(blob.stream());

    return [stream, { 'Content-Length': blob.size, 'Content-Type': blob.type }];
  } else {
    return [String(body), null];
  }
}

export function nodeReadFileSync(path: string) {
  const { fileFromSync } = require('fetch-blob/from.js');
  return fileFromSync(path);
}
