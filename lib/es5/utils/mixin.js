"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = void 0;
/**
 *
 * @see https://www.typescriptlang.org/docs/handbook/mixins.html
 *
 * @param derivedCtor The class you want extends
 * @param constructors other classes with implementations
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
        });
    });
}
exports.applyMixins = applyMixins;
