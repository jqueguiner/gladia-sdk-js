"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTextToImage = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var url_form_data_1 = require("../internal/url-form-data");
var FromTextToImage = /** @class */ (function () {
    function FromTextToImage(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromTextToImage.prototype.imageGeneration = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        formData.append('prompt', args.prompt);
        if ((0, fp_1.isDefined)(args.samples)) {
            formData.append('samples', String(args.samples));
        }
        if ((0, fp_1.isDefined)(args.steps)) {
            formData.append('steps', String(args.steps));
        }
        if ((0, fp_1.isDefined)(args.seed)) {
            formData.append('seed', String(args.seed));
        }
        return this.httpClient.post({
            url: '/text/image/image-generation/',
            headers: __assign({ 'Content-Type': models_1.TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: __assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData.toString(),
        });
    };
    return FromTextToImage;
}());
exports.FromTextToImage = FromTextToImage;
