"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromImage = void 0;
var from_image_to_image_1 = require("./from-image-to-image");
var from_image_to_text_1 = require("./from-image-to-text");
var FromImage = /** @class */ (function () {
    function FromImage(params) {
        this.fromImageToImageInst = new from_image_to_image_1.FromImageToImage(params);
        this.fromImageToTextInst = new from_image_to_text_1.FromImageToText(params);
    }
    FromImage.prototype.toImage = function () {
        return this.fromImageToImageInst;
    };
    FromImage.prototype.toText = function () {
        return this.fromImageToTextInst;
    };
    return FromImage;
}());
exports.FromImage = FromImage;
