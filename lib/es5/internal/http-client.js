"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpClient = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var sdk_version_1 = require("../meta/sdk-version");
var search_query_param_serializer_1 = require("./search-query-param-serializer");
function getHttpClient(params) {
    var _a, _b, _c, _d, _e;
    var factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : AxiosHttpClient;
    var baseHeaders = tslib_1.__assign({ 'x-gladia-key': params.apiKey, 'x-gladia-sdk': sdk_version_1.SDK_VERSION }, ((_b = params.headers) !== null && _b !== void 0 ? _b : {}));
    return factory({
        baseHeaders: baseHeaders,
        baseUrl: (_c = params.baseUrl) !== null && _c !== void 0 ? _c : 'https://v2-api.gladia.io',
        useFetch: (_d = params.useFetch) !== null && _d !== void 0 ? _d : false,
        httpClientTimeout: (_e = params.httpClientTimeout) !== null && _e !== void 0 ? _e : 300000,
    });
}
exports.getHttpClient = getHttpClient;
var AxiosHttpClient = function (_a) {
    var baseHeaders = _a.baseHeaders, baseUrl = _a.baseUrl, useFetch = _a.useFetch, httpClientTimeout = _a.httpClientTimeout;
    return {
        post: function (params) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var headers, url, responseType, timeout, adapter;
                return tslib_1.__generator(this, function (_b) {
                    headers = tslib_1.__assign(tslib_1.__assign({}, baseHeaders), params.headers);
                    url = "".concat(baseUrl).concat(params.url).concat((0, search_query_param_serializer_1.searchQueryParamSerializer)(params.query));
                    responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
                    timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
                    adapter = {};
                    return [2 /*return*/, axios_1.default
                            .post(url, params.body, tslib_1.__assign(tslib_1.__assign({ headers: headers, responseType: responseType }, adapter), { timeout: timeout }))
                            .then(function (response) { return response.data; })];
                });
            });
        },
    };
};
