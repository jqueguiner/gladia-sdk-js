import { isNotDefined } from '../utils/fp';

type ParamValueType = string | number | boolean | string[];

export function searchQueryParamSerializer(
  params: Record<string, ParamValueType> | undefined | null,
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

export function searchParamSerializer(params: Record<string, ParamValueType> | null) {
  return Object.entries(params)
    .map(([key, value]) => serializeForUri(key, value))
    .join('&');
}

function serializeForUri(key: string, value: ParamValueType): string {
  if (Array.isArray(value)) {
    return `${key}=${value.map((v) => encodeURI(v)).join(',')}`;
  } else if (typeof value === 'string') {
    return `${key}=${encodeURI(value)}`;
  } else {
    return `${key}=${value}`;
  }
}
