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

export function searchParamDeserializer(str: string): Record<string, ParamValueType> {
  if (isNotDefined(str) || str.length === 0) {
    return {};
  }
  return Object.fromEntries(
    str
      .split('&')
      .map((s) => s.split('='))
      .map(([k, v]) => (v.includes(',') ? [k, v.split(',')] : [k, v]))
      .map(([k, v]) => (typeof v === 'string' ? [k, decode(v)] : [k, v.map(decode)])),
  );
}

function serializeForUri(key: string, value: ParamValueType): string {
  if (Array.isArray(value)) {
    return `${key}=${value.map((v) => encode(v)).join(',')}`;
  } else if (typeof value === 'string') {
    return `${key}=${encode(value)}`;
  } else {
    return `${key}=${value}`;
  }
}

function encode(str: string): string {
  return encodeURI(str).replace(/,/g, '%2C');
}

function decode(str: string): string {
  return decodeURI(str).replace(/%2C/g, ',');
}
