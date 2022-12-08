import { GladiaClientParams } from '../../client/gladia-client-params';
export declare type HttpClientHeaders = Record<string, string | number | boolean>;
export interface PostParams<T = unknown> {
    url: string;
    query?: Record<string, string | number | boolean>;
    body?: T;
    headers?: HttpClientHeaders;
    responseType?: 'json' | 'arraybuffer';
}
export interface HttpClient {
    post<T = string>(params: PostParams): Promise<T>;
}
export interface HttpClientFactoryParams {
    baseHeaders: HttpClientHeaders;
    baseUrl: string;
    useFetch: boolean;
    useXhr: boolean;
    httpClientTimeout: number;
}
export declare type HttpClientFactory = (params: HttpClientFactoryParams) => HttpClient;
export declare function getHttpClient(params: GladiaClientParams): HttpClient;
export declare function getHttpClientFactory(): HttpClientFactory;
