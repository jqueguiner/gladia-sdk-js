/* Generated file with "scripts/generate-sdk.ts" */
import { TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE, } from '../models';
import { getHttpClient, UrlFormData } from '../internal/http-client';
import { isDefined } from '../utils/fp';
export class FromTextToImage {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    imageGeneration(args) {
        var _a;
        const formData = new UrlFormData();
        formData.append('prompt', args.prompt);
        if (isDefined(args.samples)) {
            formData.append('samples', String(args.samples));
        }
        if (isDefined(args.steps)) {
            formData.append('steps', String(args.steps));
        }
        if (isDefined(args.seed)) {
            formData.append('seed', String(args.seed));
        }
        return this.httpClient.post({
            url: '/text/image/image-generation/',
            headers: {
                'Content-Type': TEXT_IMAGE_IMAGE_GENERATION_CONTENT_TYPE,
                ...(args.asUrl ? { 'Accept': 'text/uri-list' } : {}),
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            responseType: args.samples > 1 || args.asUrl ? 'json' : 'arraybuffer',
            body: formData.toString(),
        });
    }
}
