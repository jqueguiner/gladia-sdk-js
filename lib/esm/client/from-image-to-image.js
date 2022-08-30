/* Generated file with "scripts/generate-sdk.ts" */
import { IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE, IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL, IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE, IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL, IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE, IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL, IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE, IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
export class FromImageToImage {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    backgroundRemoval(args) {
        var _a, _b;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/background-removal/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                model: (_b = args.model) !== null && _b !== void 0 ? _b : IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL,
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    colorization(args) {
        var _a, _b;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/colorization/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                model: (_b = args.model) !== null && _b !== void 0 ? _b : IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL,
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    faceBluring(args) {
        var _a, _b;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/face-bluring/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                model: (_b = args.model) !== null && _b !== void 0 ? _b : IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL,
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    uncolorization(args) {
        var _a, _b;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/uncolorization/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                model: (_b = args.model) !== null && _b !== void 0 ? _b : IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL,
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
}
