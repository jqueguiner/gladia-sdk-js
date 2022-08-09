export function capitalizeFirst(str) {
    return str[0].toUpperCase() + str.substring(1);
}
export function uncapitalizeFirst(str) {
    return str[0].toLowerCase() + str.substring(1);
}
export function kebabToPascalCase(str) {
    return str
        .split('-')
        .map((s) => capitalizeFirst(s))
        .join('');
}
export function kebabToSnakeCase(str) {
    return str.replace(/-/g, '_');
}
export function kebabToCamelCase(str) {
    const words = str.split('-');
    return [words.shift(), ...words.map((s) => capitalizeFirst(s))].join('');
}
