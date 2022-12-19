"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromVideoToText = void 0;
var tslib_1 = require("tslib");
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var FromVideoToText = /** @class */ (function () {
    function FromVideoToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromVideoToText.prototype.actionClassifications = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.video)) {
            formData.append('video', args.video);
        }
        if ((0, fp_1.isDefined)(args.video_url)) {
            formData.append('video_url', args.video_url);
        }
        return this.httpClient.post({
            url: '/video/text/action-classifications/',
            headers: tslib_1.__assign({ 'Content-Type': this.params.useFetch ? models_1.VIDEO_TEXT_ACTION_CLASSIFICATIONS_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: tslib_1.__assign({}, (args.model ? { model: args.model } : {})),
            body: formData,
        });
    };
    return FromVideoToText;
}());
exports.FromVideoToText = FromVideoToText;
