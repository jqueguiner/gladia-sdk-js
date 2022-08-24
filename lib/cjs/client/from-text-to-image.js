"use strict";
/* Generated file with "scripts/generate-sdk.ts" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FromTextToImage = void 0;
var models_1 = require("../models");
var http_client_1 = require("../internal/http-client");
var url_form_data_1 = require("../internal/url-form-data");
var FromTextToImage = /** @class */ (function () {
    function FromTextToImage(params) {
        this.params = params;
        this.httpClient = (0, http_client_1.getHttpClient)(this.params);
    }
    FromTextToImage.prototype.imageGeneration = function (args) {
        var _a;
        var formData = new url_form_data_1.UrlFormData();
        formData.append('prompt', args.prompt);
        formData.append('samples', String(args.samples));
        formData.append('steps', String(args.steps));
        formData.append('seed', String(args.seed));
        formData.append('scale', String(args.scale));
        return this.httpClient.post({
            url: '/text/image/image-generation/',
            headers: { 'Content-Type': models_1.TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : models_1.TEXT_IMAGE_IMAGE_GENERATION_DEFAULT_MODEL,
            },
            responseType: 'arraybuffer',
            body: formData.toString(),
        });
    };
    return FromTextToImage;
}());
exports.FromTextToImage = FromTextToImage;
