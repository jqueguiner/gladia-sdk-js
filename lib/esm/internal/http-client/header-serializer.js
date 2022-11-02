export function headerSerializer(headers) {
    return Object.fromEntries(Object.entries(headers).map(([k, v]) => {
        if (typeof v === 'string') {
            return [k, v];
        }
        else {
            return [k, String(v)];
        }
    }));
}
