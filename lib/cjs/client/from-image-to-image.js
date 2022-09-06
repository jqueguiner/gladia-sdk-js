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
            headers: __assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: __assign({}, (args.model ? { model: args.model } : {})),
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
            headers: __assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: __assign({}, (args.model ? { model: args.model } : {})),
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
            headers: __assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: __assign({}, (args.model ? { model: args.model } : {})),
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
            headers: __assign({ 'Content-Type': this.params.useFetch ? models_1.IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: __assign({}, (args.model ? { model: args.model } : {})),
            responseType: 'arraybuffer',
            body: formData,
        });
    };
    return FromImageToImage;
}());
exports.FromImageToImage = FromImageToImage;
