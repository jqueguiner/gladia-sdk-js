"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchParamSerializer = exports.searchQueryParamSerializer = void 0;
var fp_1 = require("../utils/fp");
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
        var key = _a[0], value = _a[1];
        return serializeForUri(key, value);
    })
        .join('&');
}
exports.searchParamSerializer = searchParamSerializer;
function serializeForUri(key, value) {
    if (Array.isArray(value)) {
        return "".concat(key, "=").concat(value.map(function (v) { return encodeURI(v); }).join(','));
    }
    else if (typeof value === 'string') {
        return "".concat(key, "=").concat(encodeURI(value));
    }
    else {
        return "".concat(key, "=").concat(value);
    }
}
