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
        .map(([key, value]) => `${key}=${typeof value === 'string' ? encodeURI(value) : value}`)
        .join('&');
}
