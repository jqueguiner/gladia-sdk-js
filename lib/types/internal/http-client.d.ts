import { GladiaClientParams } from '../client/gladia-client-params';
interface PostParams {
    url: string;
    query?: Record<string, string | number | boolean>;
    body?: any;
    headers?: Record<string, string | number | boolean>;
    responseType?: 'json' | 'arraybuffer';
}
export interface HttpClient {
    post<T = string>(params: PostParams): Promise<T>;
}
export interface HttpClientFactoryParams {
    baseHeaders: Record<string, string | number | boolean>;
    baseUrl: string;
    useFetch: boolean;
}
export declare type HttpClientFactory = (params: HttpClientFactoryParams) => HttpClient;
export declare function getHttpClient(params: GladiaClientParams): HttpClient;
export {};
