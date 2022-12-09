"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchHttpClient = void 0;
var tslib_1 = require("tslib");
var header_serializer_1 = require("./header-serializer");
var search_query_param_serializer_1 = require("./search-query-param-serializer");
var FetchHttpClient = function (_a) {
    var baseHeaders = _a.baseHeaders, baseUrl = _a.baseUrl, httpClientTimeout = _a.httpClientTimeout;
    return {
        post: function (params) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var headers, url, responseType, timeout, _b, signal, cancelTimeoutController;
                return tslib_1.__generator(this, function (_c) {
                    headers = new Headers((0, header_serializer_1.headerSerializer)(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, baseHeaders), params.headers), { 'x-gladia-sdk-http-client': 'fetch' })));
                    url = "".concat(baseUrl).concat(params.url).concat((0, search_query_param_serializer_1.searchQueryParamSerializer)(params.query));
                    responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
                    timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
                    _b = timeoutController(timeout), signal = _b.signal, cancelTimeoutController = _b.cancelTimeoutController;
                    return [2 /*return*/, fetch(url, {
                            method: 'POST',
                            headers: headers,
                            signal: signal,
                            mode: 'cors',
                            body: toFetchBody(params.body),
                        }).then(function (response) {
                            cancelTimeoutController();
                            if (responseType === 'json') {
                                return response.json();
                            }
                            else {
                                return response.arrayBuffer();
                            }
                        })];
                });
            });
        },
    };
};
exports.FetchHttpClient = FetchHttpClient;
function timeoutController(timeout) {
    var abortController = new AbortController();
    var timeoutId = setTimeout(function () { return abortController.abort(); }, timeout);
    return {
        signal: abortController.signal,
        cancelTimeoutController: function () {
            clearTimeout(timeoutId);
        },
    };
}
function toFetchBody(body) {
    if (typeof body === 'string') {
        return body;
    }
    else if (body instanceof FormData) {
        return body;
    }
    else {
        return String(body);
    }
}
