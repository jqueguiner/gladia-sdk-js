/**
 *
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param derivedCtor The class you want extends
 * @param constructors other classes with implementations
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
        });
    });
}
