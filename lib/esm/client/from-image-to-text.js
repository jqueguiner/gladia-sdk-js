/* Generated file with "scripts/generate-sdk.ts" */
import { IMAGE_TEXT_ASCIIFY_CONTENT_TYPE, IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL, IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE, IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL, IMAGE_TEXT_OCR_CONTENT_TYPE, IMAGE_TEXT_OCR_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
export class FromImageToText {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    asciify(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/text/asciify/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_TEXT_ASCIIFY_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : IMAGE_TEXT_ASCIIFY_DEFAULT_MODEL,
            },
            body: formData,
        });
    }
    classification(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        if (isDefined(args.top_k)) {
            formData.append('top_k', String(args.top_k));
        }
        return this.httpClient.post({
            url: '/image/text/classification/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_TEXT_CLASSIFICATION_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : IMAGE_TEXT_CLASSIFICATION_DEFAULT_MODEL,
            },
            body: formData,
        });
    }
    ocr(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        if (isDefined(args.source_language)) {
            formData.append('source_language', args.source_language);
        }
        return this.httpClient.post({
            url: '/image/text/ocr/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_TEXT_OCR_CONTENT_TYPE : undefined,
            },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : IMAGE_TEXT_OCR_DEFAULT_MODEL,
            },
            body: formData,
        });
    }
}
