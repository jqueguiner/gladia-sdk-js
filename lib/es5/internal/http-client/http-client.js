"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpClientFactory = exports.getHttpClient = void 0;
var tslib_1 = require("tslib");
var sdk_version_1 = require("../../meta/sdk-version");
var browser_http_client_1 = require("./browser.http-client");
var node_http_client_1 = require("./node.http-client");
function getHttpClient(params) {
    var _a, _b, _c, _d, _e, _f;
    var factory = (_a = params.customHttpClient) !== null && _a !== void 0 ? _a : getHttpClientFactory();
    var baseHeaders = tslib_1.__assign({ 'x-gladia-key': params.apiKey, 'x-gladia-sdk': sdk_version_1.SDK_VERSION }, ((_b = params.headers) !== null && _b !== void 0 ? _b : {}));
    return factory({
        baseHeaders: baseHeaders,
        baseUrl: (_c = params.baseUrl) !== null && _c !== void 0 ? _c : 'https://v2-api.gladia.io',
        useFetch: (_d = params.useFetch) !== null && _d !== void 0 ? _d : false,
        useXhr: (_e = params.useXhr) !== null && _e !== void 0 ? _e : false,
        httpClientTimeout: (_f = params.httpClientTimeout) !== null && _f !== void 0 ? _f : 300000,
    });
}
exports.getHttpClient = getHttpClient;
function getHttpClientFactory() {
    if (typeof window === 'undefined' && typeof process === 'object') {
        return node_http_client_1.NodeHttpClient;
    }
    else {
        return browser_http_client_1.BrowserHttpClient;
    }
}
exports.getHttpClientFactory = getHttpClientFactory;
