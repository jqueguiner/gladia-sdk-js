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
exports.FromAudioToText = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var fp_1 = require("../utils/fp");
var FromAudioToText = /** @class */ (function () {
    function FromAudioToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromAudioToText.prototype.audioTranscription = function (args) {
        var _a;
        var formData = new FormData();
        if ((0, fp_1.isDefined)(args.audio)) {
            formData.append('audio', args.audio);
        }
        if ((0, fp_1.isDefined)(args.audio_url)) {
            formData.append('audio_url', args.audio_url);
        }
        if ((0, fp_1.isDefined)(args.language)) {
            formData.append('language', args.language);
        }
        return this.httpClient.post({
            url: '/audio/text/audio-transcription/',
            headers: __assign({ 'Content-Type': this.params.useFetch ? models_1.AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE : undefined }, ((_a = args.headers) !== null && _a !== void 0 ? _a : {})),
            query: __assign({}, (args.model ? { model: args.model } : {})),
            body: formData,
        });
    };
    return FromAudioToText;
}());
exports.FromAudioToText = FromAudioToText;
