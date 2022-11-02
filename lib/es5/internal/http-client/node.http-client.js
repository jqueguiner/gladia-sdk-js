"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeHttpClient = void 0;
var tslib_1 = require("tslib");
var header_serializer_1 = require("./header-serializer");
var search_query_param_serializer_1 = require("./search-query-param-serializer");
var https_1 = tslib_1.__importDefault(require("https"));
var NodeHttpClient = function (_a) {
    var baseHeaders = _a.baseHeaders, baseUrl = _a.baseUrl, httpClientTimeout = _a.httpClientTimeout;
    return {
        post: function (params) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var headers, url, responseType, timeout;
                return tslib_1.__generator(this, function (_b) {
                    headers = (0, header_serializer_1.headerSerializer)(tslib_1.__assign(tslib_1.__assign({}, baseHeaders), params.headers));
                    url = "".concat(baseUrl).concat(params.url).concat((0, search_query_param_serializer_1.searchQueryParamSerializer)(params.query));
                    responseType = (_a = params.responseType) !== null && _a !== void 0 ? _a : 'json';
                    timeout = httpClientTimeout !== null && httpClientTimeout !== void 0 ? httpClientTimeout : 300000;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var body = '';
                            var req = https_1.default.request(url, { method: 'POST', headers: headers, timeout: timeout }, function (res) {
                                res.on('data', function (chunk) {
                                    body += chunk;
                                });
                                res.on('end', function () {
                                    var buffer = Buffer.from(body);
                                    if (responseType === 'json') {
                                        resolve(JSON.parse(buffer.toString()));
                                    }
                                    else {
                                        return buffer;
                                    }
                                });
                            });
                            req.on('error', function (error) {
                                reject(error);
                            });
                            req.write(toNodeHttpsBody(params.body));
                            req.end();
                        })];
                });
            });
        },
    };
};
exports.NodeHttpClient = NodeHttpClient;
function toNodeHttpsBody(body) {
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
