"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.GladiaClient = void 0;
var shortcuts_1 = require("./client/shortcuts");
var from_audio_1 = require("./client/from-audio");
var from_image_1 = require("./client/from-image");
var from_text_1 = require("./client/from-text");
var GladiaClient = /** @class */ (function (_super) {
    __extends(GladiaClient, _super);
    function GladiaClient(params) {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        var validatedParams = __assign(__assign({}, params), { useFetch: (_a = params.useFetch) !== null && _a !== void 0 ? _a : false });
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
