export function isDefined<T>(x: T | null | undefined): x is T {
  return x !== null && typeof x !== 'undefined';
}

export function isNotDefined<T>(x: T | null | undefined): x is null | undefined {
  return x === null || typeof x === 'undefined';
}
