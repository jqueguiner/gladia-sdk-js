"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromImageToImage = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var FromImageToImage = /** @class */ (function () {
    function FromImageToImage(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromImageToImage.prototype.backgroundRemoval = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/background-removal/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToImage.prototype.colorization = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/colorization/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToImage.prototype.faceBluring = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/face-bluring/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    FromImageToImage.prototype.uncolorization = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/uncolorization/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    return FromImageToImage;
}());
exports.FromImageToImage = FromImageToImage;
