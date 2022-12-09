"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XhrHttpClient = void 0;
var tslib_1 = require("tslib");
var header_serializer_1 = require("./header-serializer");
var search_query_param_serializer_1 = require("./search-query-param-serializer");
var XhrHttpClient = function (_a) {
    var baseHeaders = _a.baseHeaders, baseUrl = _a.baseUrl, httpClientTimeout = _a.httpClientTimeout;
    return {
        post: function (params) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var headers, url, responseType, timeout;
                return tslib_1.__generator(this, function (_b) {
                    headers = new Headers((0, header_serializer_1.headerSerializer)(tslib_1.__assign(tslib_1.__assign({}, baseHeaders), params.headers)));
                    url = "".concat(baseUrl).concat(params.url).concat((0, search_query_param_serializer_1.searchQueryParamSerializer)(params.query));
                    responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
                    timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var xhr = new XMLHttpRequest();
                            xhr.onload = function () {
                                if (responseType === 'json') {
                                    resolve(JSON.parse(xhr.responseText));
                                }
                                else {
                                    resolve(xhr.response);
                                }
                            };
                            xhr.ontimeout = function () { return reject('timeout'); };
                            xhr.onerror = function (e) { return reject(e); };
                            xhr.timeout = timeout;
                            xhr.open('POST', url);
                            headers.forEach(function (value, key) {
                                xhr.setRequestHeader(key, value);
                            });
                            xhr.setRequestHeader('x-gladia-sdk-http-client', 'xhr');
                            xhr.send(toXhrBody(params.body));
                        })];
                });
            });
        },
    };
};
exports.XhrHttpClient = XhrHttpClient;
function toXhrBody(body) {
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
