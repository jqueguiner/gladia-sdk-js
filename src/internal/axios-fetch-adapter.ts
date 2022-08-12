import type { AxiosAdapter } from 'axios';

export function axiosFetchAdapter(): Promise<AxiosAdapter> {
  return import('@vespaiach/axios-fetch-adapter').then((m) => m.default);
}
