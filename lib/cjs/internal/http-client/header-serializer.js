"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerSerializer = void 0;
function headerSerializer(headers) {
    return Object.fromEntries(Object.entries(headers).map(function (_a) {
        var k = _a[0], v = _a[1];
        if (typeof v === 'string') {
            return [k, v];
        }
        else {
            return [k, String(v)];
        }
    }));
}
exports.headerSerializer = headerSerializer;
