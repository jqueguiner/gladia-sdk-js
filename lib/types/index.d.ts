import { GladiaClient } from './gladia-client';
import { GladiaClientParams } from './client/gladia-client-params';
export declare function gladia(params: GladiaClientParams): GladiaClient;
export default gladia;
export * from './models';
export * as meta from './meta';
export type { HttpClientFactory, HttpClientFactoryParams, PostParams, } from './internal/http-client';
