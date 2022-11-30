import { isDefined, isNotDefined } from '../../utils/fp';
import { HttpClientHeaders } from './http-client';

export function headerSerializer(headers: HttpClientHeaders): Record<string, string> {
  return Object.fromEntries(
    Object.entries(headers)
      .map(([k, v]) => {
        if (isNotDefined(v)) {
          return undefined;
        } else if (typeof v === 'string') {
          return [k, v];
        } else {
          return [k, String(v)];
        }
      })
      .filter(isDefined),
  );
}
