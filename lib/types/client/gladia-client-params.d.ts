import { HttpClientFactory } from '../internal/http-client';
interface BaseGladiaClientParams {
    apiKey: string;
    baseUrl?: string;
    httpClientTimeout?: number;
    customHttpClient?: HttpClientFactory;
    headers?: Record<string, string | number | boolean>;
    useFetch?: boolean;
}
interface ReleaseGladiaClientParams extends BaseGladiaClientParams {
    enablePreviewFeatures?: false;
}
interface PreviewGladiaClientParams extends BaseGladiaClientParams {
    enablePreviewFeatures: true;
    autoMlBaseUrl: string;
}
export declare type GladiaClientParams = ReleaseGladiaClientParams | PreviewGladiaClientParams;
export declare function isPreviewEnabled(param: GladiaClientParams): param is PreviewGladiaClientParams;
export {};
