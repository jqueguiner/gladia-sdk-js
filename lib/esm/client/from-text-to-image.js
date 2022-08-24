/* Generated file with "scripts/generate-sdk.ts" */
import { TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE, TEXT_IMAGE_IMAGE_GENERATION_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { UrlFormData } from '../internal/url-form-data';
export class FromTextToImage {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    imageGeneration(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('prompt', args.prompt);
        formData.append('samples', String(args.samples));
        formData.append('steps', String(args.steps));
        formData.append('seed', String(args.seed));
        formData.append('scale', String(args.scale));
        return this.httpClient.post({
            url: '/text/image/image-generation/',
            headers: { 'Content-Type': TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE },
            query: {
                model: (_a = args.model) !== null && _a !== void 0 ? _a : TEXT_IMAGE_IMAGE_GENERATION_DEFAULT_MODEL,
            },
            responseType: 'arraybuffer',
            body: formData.toString(),
        });
    }
}
