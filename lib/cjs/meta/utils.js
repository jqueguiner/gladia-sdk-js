"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabToCamelCase = exports.kebabToSnakeCase = exports.kebabToPascalCase = exports.uncapitalizeFirst = exports.capitalizeFirst = void 0;
var tslib_1 = require("tslib");
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
    return tslib_1.__spreadArray([words.shift()], words.map(function (s) { return capitalizeFirst(s); }), true).join('');
}
exports.kebabToCamelCase = kebabToCamelCase;
