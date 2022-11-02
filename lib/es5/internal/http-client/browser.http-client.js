"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserHttpClient = void 0;
var fetch_http_client_1 = require("./fetch.http-client");
var xhr_http_client_1 = require("./xhr.http-client");
var BrowserHttpClient = function (factoryParams) {
    if (factoryParams.useFetch || typeof fetch == 'function') {
        return (0, fetch_http_client_1.FetchHttpClient)(factoryParams);
    }
    else {
        return (0, xhr_http_client_1.XhrHttpClient)(factoryParams);
    }
};
exports.BrowserHttpClient = BrowserHttpClient;
