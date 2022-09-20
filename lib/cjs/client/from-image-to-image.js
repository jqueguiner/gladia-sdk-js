"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromImageToImage = void 0;
var tslib_1 = require("tslib");
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
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
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
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData,
        });
    };
    FromImageToImage.prototype.deblurring = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/deblurring/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData,
        });
    };
    FromImageToImage.prototype.enhancement = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/enhancement/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_ENHANCEMENT_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
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
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData,
        });
    };
    FromImageToImage.prototype.guidedInpainting = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.original_image)) {
            formData.append('original_image', args.original_image);
        }
        if ((0, fp_1.isDefined)(args.original_image_url)) {
            formData.append('original_image_url', args.original_image_url);
        }
        if ((0, fp_1.isDefined)(args.mask_image)) {
            formData.append('mask_image', args.mask_image);
        }
        if ((0, fp_1.isDefined)(args.mask_image_url)) {
            formData.append('mask_image_url', args.mask_image_url);
        }
        formData.append('prompt', args.prompt);
        return this.httpClient.post({
            url: '/image/image/guided-inpainting/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData,
        });
    };
    FromImageToImage.prototype.inpainting = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.original_image)) {
            formData.append('original_image', args.original_image);
        }
        if ((0, fp_1.isDefined)(args.original_image_url)) {
            formData.append('original_image_url', args.original_image_url);
        }
        if ((0, fp_1.isDefined)(args.mask_image)) {
            formData.append('mask_image', args.mask_image);
        }
        if ((0, fp_1.isDefined)(args.mask_image_url)) {
            formData.append('mask_image_url', args.mask_image_url);
        }
        return this.httpClient.post({
            url: '/image/image/inpainting/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_INPAINTING_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData,
        });
    };
    FromImageToImage.prototype.superResolution = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.image)) {
            formData.append('image', args.image);
        }
        if ((0, fp_1.isDefined)(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/super-resolution/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_SUPER_RESOLUTION_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
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
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData,
        });
    };
    return FromImageToImage;
}());
exports.FromImageToImage = FromImageToImage;
