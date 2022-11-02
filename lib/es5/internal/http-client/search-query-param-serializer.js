"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchParamDeserializer = exports.searchParamSerializer = exports.searchQueryParamSerializer = void 0;
var tslib_1 = require("tslib");
var fp_1 = require("../../utils/fp");
function searchQueryParamSerializer(params) {
    if ((0, fp_1.isNotDefined)(params)) {
        return '';
    }
    var serializedParam = searchParamSerializer(params);
    if (serializedParam.length === 0) {
        return '';
    }
    else {
        return '?' + serializedParam;
    }
}
exports.searchQueryParamSerializer = searchQueryParamSerializer;
function searchParamSerializer(params) {
    return Object.entries(params)
        .map(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        return serializeForUri(key, value);
    })
        .join('&');
}
exports.searchParamSerializer = searchParamSerializer;
function searchParamDeserializer(str) {
    if ((0, fp_1.isNotDefined)(str) || str.length === 0) {
        return {};
    }
    return Object.fromEntries(str
        .split('&')
        .map(function (s) { return s.split('='); })
        .map(function (_a) {
        var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
        return (v.includes(',') ? [k, v.split(',')] : [k, v]);
    })
        .map(function (_a) {
        var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
        return (typeof v === 'string' ? [k, decode(v)] : [k, v.map(decode)]);
    }));
}
exports.searchParamDeserializer = searchParamDeserializer;
function serializeForUri(key, value) {
    if (Array.isArray(value)) {
        return "".concat(key, "=").concat(value.map(function (v) { return encode(v); }).join(','));
    }
    else if (typeof value === 'string') {
        return "".concat(key, "=").concat(encode(value));
    }
    else {
        return "".concat(key, "=").concat(value);
    }
}
function encode(str) {
    return encodeURI(str).replace(/,/g, '%2C');
}
function decode(str) {
    return decodeURI(str).replace(/%2C/g, ',');
}
