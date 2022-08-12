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
var axios_fetch_adapter_1 = __importDefault(require("@vespaiach/axios-fetch-adapter"));
var sdk_version_1 = require("../meta/sdk-version");
function getHttpClient(params) {
    var _a, _b, _c;
    var factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : AxiosHttpClient;
    var baseHeaders = {
        'x-gladia-key': params.apiKey,
        'x-gladia-sdk': sdk_version_1.SDK_VERSION,
        'Content-Type': 'application/json',
    };
    return factory({
        baseHeaders: baseHeaders,
        baseUrl: (_b = params.baseUrl) !== null && _b !== void 0 ? _b : 'https://v2-api.gladia.io',
        useFetch: (_c = params.useFetch) !== null && _c !== void 0 ? _c : false,
    });
}
exports.getHttpClient = getHttpClient;
var AxiosHttpClient = function (_a) {
    var baseHeaders = _a.baseHeaders, baseUrl = _a.baseUrl, useFetch = _a.useFetch;
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
            var adapter = (function () {
                if (useFetch) {
                    return { adapter: axios_fetch_adapter_1.default };
                }
                return {};
            })();
            return axios_1.default
                .post(url.toString(), params.body, __assign({ headers: headers, responseType: responseType }, adapter))
                .then(function (response) { return response.data; });
        },
    };
};
