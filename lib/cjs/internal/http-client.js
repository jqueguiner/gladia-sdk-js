"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpClient = void 0;
var axios_1 = __importDefault(require("axios"));
var sdk_version_1 = require("../meta/sdk-version");
function getHttpClient(params) {
    var _a, _b;
    var factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : AxiosHttpClient;
    var baseHeaders = {
        'x-gladia-key': params.apiKey,
        'x-gladia-sdk': sdk_version_1.SDK_VERSION,
        'Content-Type': 'application/json',
    };
    return factory({ baseHeaders: baseHeaders, baseUrl: (_b = params.baseUrl) !== null && _b !== void 0 ? _b : 'https://v2-api.gladia.io' });
}
exports.getHttpClient = getHttpClient;
var AxiosHttpClient = function (_a) {
    var baseHeaders = _a.baseHeaders, baseUrl = _a.baseUrl;
    return {
        post: function (params) {
            var _a, _b;
            var headers = __assign(__assign({}, baseHeaders), params.headers);
            var url = new URL(params.url, baseUrl);
            for (var _i = 0, _c = Object.entries((_a = params.query) !== null && _a !== void 0 ? _a : {}); _i < _c.length; _i++) {
                var _d = _c[_i], key = _d[0], value = _d[1];
                url.searchParams.set(key, String(value));
            }
            var responseType = (_b = params.responseType) !== null && _b !== void 0 ? _b : 'json';
            return axios_1.default
                .post(url.toString(), params.body, { headers: headers, responseType: responseType })
                .then(function (response) { return response.data; });
        },
    };
};
