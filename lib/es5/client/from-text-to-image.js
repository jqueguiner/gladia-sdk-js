"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTextToImage = void 0;
var tslib_1 = require("tslib");
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var FromTextToImage = /** @class */ (function () {
    function FromTextToImage(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromTextToImage.prototype.imageGeneration = function (args) {
        var _a;
        var formData = new http_client_1.UrlFormData();
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
            headers: tslib_1.__assign(tslib_1.__assign({ 'Content-Type': models_1.TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE }, (args.asUrl ? { 'Accept': 'text/uri-list' } : {})), ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: args.samples > 1 || args.asUrl ? 'json' : 'arraybuffer',
            body: formData.toString(),
        });
    };
    return FromTextToImage;
}());
exports.FromTextToImage = FromTextToImage;
