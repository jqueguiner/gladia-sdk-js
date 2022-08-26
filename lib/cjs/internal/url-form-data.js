"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlFormData = void 0;
var search_query_param_serializer_1 = require("./search-query-param-serializer");
var UrlFormData = /** @class */ (function () {
    function UrlFormData(fromString) {
        this.data = {};
        this.data = (0, search_query_param_serializer_1.searchParamDeserializer)(fromString);
    }
    UrlFormData.prototype.append = function (key, value) {
        this.data[key] = value;
    };
    UrlFormData.prototype.get = function (key) {
        return this.data[key];
    };
    UrlFormData.prototype.toString = function () {
        return (0, search_query_param_serializer_1.searchParamSerializer)(this.data);
    };
    return UrlFormData;
}());
exports.UrlFormData = UrlFormData;
