export function isDefined(x) {
    return x !== null && typeof x !== 'undefined';
}
export function isNotDefined(x) {
    return x === null || typeof x === 'undefined';
}
