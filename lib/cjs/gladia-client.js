"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GladiaClient = void 0;
var tslib_1 = require("tslib");
var shortcuts_1 = require("./client/shortcuts");
var from_audio_1 = require("./client/from-audio");
var from_image_1 = require("./client/from-image");
var from_text_1 = require("./client/from-text");
var GladiaClient = /** @class */ (function (_super) {
    tslib_1.__extends(GladiaClient, _super);
    function GladiaClient(params) {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        var validatedParams = tslib_1.__assign(tslib_1.__assign({}, params), { useFetch: (_a = params.useFetch) !== null && _a !== void 0 ? _a : false });
        _this.fromAudioInst = new from_audio_1.FromAudio(validatedParams);
        _this.fromImageInst = new from_image_1.FromImage(validatedParams);
        _this.fromTextInst = new from_text_1.FromText(validatedParams);
        return _this;
    }
    GladiaClient.prototype.fromAudio = function () {
        return this.fromAudioInst;
    };
    GladiaClient.prototype.fromImage = function () {
        return this.fromImageInst;
    };
    GladiaClient.prototype.fromText = function () {
        return this.fromTextInst;
    };
    return GladiaClient;
}(shortcuts_1.Shortcuts));
exports.GladiaClient = GladiaClient;
