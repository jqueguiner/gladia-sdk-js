"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromImageToText = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var FromImageToText = /** @class */ (function () {
    function FromImageToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromImageToText.prototype.asciify = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/text/asciify/',
            headers: {
                'Content-Type': this.params.useFetch ? models_1.IMAGE_TEXT_ASCIIFY_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToText.prototype.classification = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        if ((0, fp_1.isDefined)(args.top_k)) {
            formData.append('top_k', String(args.top_k));
        }
        return this.httpClient.post({
            url: '/image/text/classification/',
            headers: {
                'Content-Type': this.params.useFetch ? models_1.IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToText.prototype.ocr = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        if ((0, fp_1.isDefined)(args.source_language)) {
            formData.append('source_language', args.source_language);
        }
        return this.httpClient.post({
            url: '/image/text/ocr/',
            headers: {
                'Content-Type': this.params.useFetch ? models_1.IMAGE_TEXT_OCR_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_TEXT_OCR_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    return FromImageToText;
}());
exports.FromImageToText = FromImageToText;
