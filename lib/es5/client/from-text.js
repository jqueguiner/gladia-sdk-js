"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromText = void 0;
var from_text_to_image_1 = require("./from-text-to-image");
var from_text_to_text_1 = require("./from-text-to-text");
var FromText = /** @class */ (function () {
    function FromText(params) {
        this.fromTextToImageInst = new from_text_to_image_1.FromTextToImage(params);
        this.fromTextToTextInst = new from_text_to_text_1.FromTextToText(params);
    }
    FromText.prototype.toImage = function () {
        return this.fromTextToImageInst;
    };
    FromText.prototype.toText = function () {
        return this.fromTextToTextInst;
    };
    return FromText;
}());
exports.FromText = FromText;
