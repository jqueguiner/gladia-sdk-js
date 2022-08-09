/* Generated file with "scripts/generate-sdk.ts" */
import { IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL, IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL, IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL, IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
export class FromImageToImage {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    backgroundRemoval(args) {
        var _a;
        const formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/background-removal/',
            query: { model: (_a = args.model) !== null && _a !== void 0 ? _a : IMAGE_IMAGE_BACKGROUND_REMOVAL_DEFAULT_MODEL },
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        });
    }
    colorization(args) {
        var _a;
        const formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/colorization/',
            query: { model: (_a = args.model) !== null && _a !== void 0 ? _a : IMAGE_IMAGE_COLORIZATION_DEFAULT_MODEL },
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        });
    }
    faceBluring(args) {
        var _a;
        const formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/face-bluring/',
            query: { model: (_a = args.model) !== null && _a !== void 0 ? _a : IMAGE_IMAGE_FACE_BLURING_DEFAULT_MODEL },
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        });
    }
    uncolorization(args) {
        var _a;
        const formData = new FormData();
        formData.append('image', args.image);
        formData.append('image_url', args.image_url);
        return this.httpClient.post({
            url: '/image/image/uncolorization/',
            query: { model: (_a = args.model) !== null && _a !== void 0 ? _a : IMAGE_IMAGE_UNCOLORIZATION_DEFAULT_MODEL },
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        });
    }
}
