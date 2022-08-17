"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromImageToImage = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var FromImageToImage = /** @class */ (function () {
    function FromImageToImage(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromImageToImage.prototype.backgroundRemoval = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/background-removal/',
            headers: {
                'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToImage.prototype.colorization = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/colorization/',
            headers: {
                'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToImage.prototype.faceBluring = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/face-bluring/',
            headers: {
                'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToImage.prototype.uncolorization = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/uncolorization/',
            headers: {
                'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    return FromImageToImage;
}());
exports.FromImageToImage = FromImageToImage;
