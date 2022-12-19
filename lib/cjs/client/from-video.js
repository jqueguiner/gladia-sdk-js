"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromVideo = void 0;
var from_video_to_text_1 = require("./from-video-to-text");
var FromVideo = /** @class */ (function () {
    function FromVideo(params) {
        this.fromVideoToTextInst = new from_video_to_text_1.FromVideoToText(params);
    }
    FromVideo.prototype.toText = function () {
        return this.fromVideoToTextInst;
    };
    return FromVideo;
}());
exports.FromVideo = FromVideo;
