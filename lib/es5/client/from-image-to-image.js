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
            headers: tslib_1.__assign(tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE : undefined }, (args.asUrl ? { 'Accept': 'text/uri-list' } : {})), ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: args.asUrl ? 'json' : 'arraybuffer',
            body: formData,
        });
    };
    FromImageToImage.prototype.backgroundReplacement = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.original_image)) {
            formData.append('original_image', args.original_image);
        }
        if ((0, fp_1.isDefined)(args.original_image_url)) {
            formData.append('original_image_url', args.original_image_url);
        }
        if ((0, fp_1.isDefined)(args.background_image)) {
            formData.append('background_image', args.background_image);
        }
        if ((0, fp_1.isDefined)(args.background_image_url)) {
            formData.append('background_image_url', args.background_image_url);
        }
        formData.append('alignment', args.alignment);
        return this.httpClient.post({
            url: '/image/image/background-replacement/',
            headers: tslib_1.__assign(tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_BACKGROUND_REPLACEMENT_CONTENT_TYPE : undefined }, (args.asUrl ? { 'Accept': 'text/uri-list' } : {})), ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: args.asUrl ? 'json' : 'arraybuffer',
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
            headers: tslib_1.__assign(tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE : undefined }, (args.asUrl ? { 'Accept': 'text/uri-list' } : {})), ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: args.asUrl ? 'json' : 'arraybuffer',
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
            headers: tslib_1.__assign(tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE : undefined }, (args.asUrl ? { 'Accept': 'text/uri-list' } : {})), ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: args.asUrl ? 'json' : 'arraybuffer',
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
            headers: tslib_1.__assign(tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE : undefined }, (args.asUrl ? { 'Accept': 'text/uri-list' } : {})), ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            responseType: args.asUrl ? 'json' : 'arraybuffer',
            body: formData,
        });
    };
    return FromImageToImage;
}());
exports.FromImageToImage = FromImageToImage;
