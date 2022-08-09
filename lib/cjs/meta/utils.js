"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabToCamelCase = exports.kebabToSnakeCase = exports.kebabToPascalCase = exports.uncapitalizeFirst = exports.capitalizeFirst = void 0;
function capitalizeFirst(str) {
    return str[0].toUpperCase() + str.substring(1);
}
exports.capitalizeFirst = capitalizeFirst;
function uncapitalizeFirst(str) {
    return str[0].toLowerCase() + str.substring(1);
}
exports.uncapitalizeFirst = uncapitalizeFirst;
function kebabToPascalCase(str) {
    return str
        .split('-')
        .map(function (s) { return capitalizeFirst(s); })
        .join('');
}
exports.kebabToPascalCase = kebabToPascalCase;
function kebabToSnakeCase(str) {
    return str.replace(/-/g, '_');
}
exports.kebabToSnakeCase = kebabToSnakeCase;
function kebabToCamelCase(str) {
    var words = str.split('-');
    return __spreadArray([words.shift()], words.map(function (s) { return capitalizeFirst(s); }), true).join('');
}
exports.kebabToCamelCase = kebabToCamelCase;
