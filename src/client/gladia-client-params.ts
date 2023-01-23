import { HttpClientFactory } from '../internal/http-client';

interface BaseGladiaClientParams {
  apiKey: string;
  baseUrl?: string;
  httpClientTimeout?: number;
  customHttpClient?: HttpClientFactory;
  headers?: Record<string, string | number | boolean>;
  useFetch?: boolean;
  useXhr?: boolean;
}

interface ReleaseGladiaClientParams extends BaseGladiaClientParams {
  enablePreviewFeatures?: false;
}
interface PreviewGladiaClientParams extends BaseGladiaClientParams {
  enablePreviewFeatures: true;
}

export type GladiaClientParams = ReleaseGladiaClientParams | PreviewGladiaClientParams;

export function isPreviewEnabled(param: GladiaClientParams): param is PreviewGladiaClientParams {
  return param.enablePreviewFeatures ?? false;
}
