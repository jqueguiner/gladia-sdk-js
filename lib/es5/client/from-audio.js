"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromAudio = void 0;
var from_audio_to_text_1 = require("./from-audio-to-text");
var FromAudio = /** @class */ (function () {
    function FromAudio(params) {
        this.fromAudioToTextInst = new from_audio_to_text_1.FromAudioToText(params);
    }
    FromAudio.prototype.toText = function () {
        return this.fromAudioToTextInst;
    };
    return FromAudio;
}());
exports.FromAudio = FromAudio;
