/* Generated file with "scripts/generate-sdk.ts" */
import { IMAGE_IMAGE_BACKGROUND_REMOVAL_CONTENT_TYPE, IMAGE_IMAGE_COLORIZATION_CONTENT_TYPE, IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE, IMAGE_IMAGE_FACE_BLURING_CONTENT_TYPE, IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE, IMAGE_IMAGE_INPAINTING_CONTENT_TYPE, IMAGE_IMAGE_SUPER_RESOLUTION_CONTENT_TYPE, IMAGE_IMAGE_UNCOLORIZATION_CONTENT_TYPE, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
export class FromImageToImage {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    backgroundRemoval(args) {
        var _a;
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
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    colorization(args) {
        var _a;
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
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    deblurring(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/deblurring/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_DEBLURRING_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    faceBluring(args) {
        var _a;
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
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    guidedInpainting(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.original_image)) {
            formData.append('original_image', args.original_image);
        }
        if (isDefined(args.original_image_url)) {
            formData.append('original_image_url', args.original_image_url);
        }
        if (isDefined(args.mask_image)) {
            formData.append('mask_image', args.mask_image);
        }
        if (isDefined(args.mask_image_url)) {
            formData.append('mask_image_url', args.mask_image_url);
        }
        formData.append('prompt', args.prompt);
        return this.httpClient.post({
            url: '/image/image/guided-inpainting/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_GUIDED_INPAINTING_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    inpainting(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.original_image)) {
            formData.append('original_image', args.original_image);
        }
        if (isDefined(args.original_image_url)) {
            formData.append('original_image_url', args.original_image_url);
        }
        if (isDefined(args.mask_image)) {
            formData.append('mask_image', args.mask_image);
        }
        if (isDefined(args.mask_image_url)) {
            formData.append('mask_image_url', args.mask_image_url);
        }
        return this.httpClient.post({
            url: '/image/image/inpainting/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_INPAINTING_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    superResolution(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.image)) {
            formData.append('image', args.image);
        }
        if (isDefined(args.image_url)) {
            formData.append('image_url', args.image_url);
        }
        return this.httpClient.post({
            url: '/image/image/super-resolution/',
            headers: {
                'Content-Type': this.params.useFetch ? IMAGE_IMAGE_SUPER_RESOLUTION_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
    uncolorization(args) {
        var _a;
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
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: 'arraybuffer',
            body: formData,
        });
    }
}
