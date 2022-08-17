import { isNotDefined } from '../utils/fp';

export function searchQueryParamSerializer(
  params: Record<string, string | number | boolean> | undefined | null,
): string {
  if (isNotDefined(params)) {
    return '';
  }
  const serializedParam = searchParamSerializer(params);
  if (serializedParam.length === 0) {
    return '';
  } else {
    return '?' + serializedParam;
  }
}

export function searchParamSerializer(params: Record<string, string | number | boolean> | null) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${typeof value === 'string' ? encodeURI(value) : value}`)
    .join('&');
}
