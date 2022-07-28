export function capitalizeFirst(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

export function uncapitalizeFirst(str: string): string {
  return str[0].toLowerCase() + str.substring(1);
}

export function kebabToPascalCase(str: string): string {
  return str
    .split('-')
    .map((s) => capitalizeFirst(s))
    .join('');
}

export function kebabToSnakeCase(str: string): string {
  return str.replace(/-/g, '_');
}

export function kebabToCamelCase(str: string): string {
  const words = str.split('-');
  return [words.shift(), ...words.map((s) => capitalizeFirst(s))].join('');
}
