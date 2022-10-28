import { HttpClientHeaders } from './http-client';

export function headerSerializer(headers: HttpClientHeaders): Record<string, string> {
  return Object.fromEntries(
    Object.entries(headers).map(([k, v]) => {
      if (typeof v === 'string') {
        return [k, v];
      } else {
        return [k, String(v)];
      }
    }),
  );
}
