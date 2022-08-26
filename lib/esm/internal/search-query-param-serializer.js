import { isNotDefined } from '../utils/fp';
export function searchQueryParamSerializer(params) {
    if (isNotDefined(params)) {
        return '';
    }
    const serializedParam = searchParamSerializer(params);
    if (serializedParam.length === 0) {
        return '';
    }
    else {
        return '?' + serializedParam;
    }
}
export function searchParamSerializer(params) {
    return Object.entries(params)
        .map(([key, value]) => serializeForUri(key, value))
        .join('&');
}
export function searchParamDeserializer(str) {
    if (isNotDefined(str) || str.length === 0) {
        return {};
    }
    return Object.fromEntries(str
        .split('&')
        .map((s) => s.split('='))
        .map(([k, v]) => (v.includes(',') ? [k, v.split(',')] : [k, v]))
        .map(([k, v]) => (typeof v === 'string' ? [k, decode(v)] : [k, v.map(decode)])));
}
function serializeForUri(key, value) {
    if (Array.isArray(value)) {
        return `${key}=${value.map((v) => encode(v)).join(',')}`;
    }
    else if (typeof value === 'string') {
        return `${key}=${encode(value)}`;
    }
    else {
        return `${key}=${value}`;
    }
}
function encode(str) {
    return encodeURI(str).replace(/,/g, '%2C');
}
function decode(str) {
    return decodeURI(str).replace(/%2C/g, ',');
}
