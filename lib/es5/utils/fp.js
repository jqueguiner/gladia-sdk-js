"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotDefined = exports.isDefined = void 0;
function isDefined(x) {
    return x !== null && typeof x !== 'undefined';
}
exports.isDefined = isDefined;
function isNotDefined(x) {
    return x === null || typeof x === 'undefined';
}
exports.isNotDefined = isNotDefined;
