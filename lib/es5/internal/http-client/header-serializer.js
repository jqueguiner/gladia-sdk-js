"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerSerializer = void 0;
var tslib_1 = require("tslib");
var fp_1 = require("../../utils/fp");
function headerSerializer(headers) {
    return Object.fromEntries(Object.entries(headers)
        .map(function (_a) {
        var _b = tslib_1.__read(_a, 2), k = _b[0], v = _b[1];
        if ((0, fp_1.isNotDefined)(v)) {
            return undefined;
        }
        else if (typeof v === 'string') {
            return [k, v];
        }
        else {
            return [k, String(v)];
        }
    })
        .filter(fp_1.isDefined));
}
exports.headerSerializer = headerSerializer;
