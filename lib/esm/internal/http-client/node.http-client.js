import { headerSerializer } from './header-serializer';
import { searchQueryParamSerializer } from './search-query-param-serializer';
import https from 'https';
export const NodeHttpClient = ({ baseHeaders, baseUrl, httpClientTimeout }) => {
    return {
        async post(params) {
            var _a;
            const headers = headerSerializer({ ...baseHeaders, ...params.headers });
            const url = `${baseUrl}${params.url}${searchQueryParamSerializer(params.query)}`;
            const responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
            const timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
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
                        }
                        else {
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
function toNodeHttpsBody(body) {
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
