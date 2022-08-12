"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromAudioToText = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var FromAudioToText = /** @class */ (function () {
    function FromAudioToText(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromAudioToText.prototype.audioTranscription = function (args) {
        var _a;
        var formData = new FormData();
        formData.append('audio', args.audio);
        formData.append('audio_url', args.audio_url);
        formData.append('language', args.language);
        return this.httpClient.post({
            url: '/audio/text/audio-transcription/',
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.AUDIO_TEXT_AUDIO_TRANSCRIPTION_DEFAULT_MODEL,
            },
            body: formData,
        });
    };
    return FromAudioToText;
}());
exports.FromAudioToText = FromAudioToText;
