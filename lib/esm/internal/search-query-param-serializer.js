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
function serializeForUri(key, value) {
    if (Array.isArray(value)) {
        return `${key}=${value.map((v) => encodeURI(v)).join(',')}`;
    }
    else if (typeof value === 'string') {
        return `${key}=${encodeURI(value)}`;
    }
    else {
        return `${key}=${value}`;
    }
}
