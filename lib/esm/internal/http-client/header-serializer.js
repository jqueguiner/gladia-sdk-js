import { isDefined, isNotDefined } from '../../utils/fp';
export function headerSerializer(headers) {
    return Object.fromEntries(Object.entries(headers)
        .map(([k, v]) => {
        if (isNotDefined(v)) {
            return undefined;
        }
        else if (typeof v === 'string') {
            return [k, v];
        }
        else {
            return [k, String(v)];
        }
    })
        .filter(isDefined));
}
