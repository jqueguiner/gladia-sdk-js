/* Generated file with "scripts/generate-sdk.ts" */
import { VIDEO_TEXT_ACTION_CLASSIFICATIONS_CONTENT_TYPE, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
export class FromVideoToText {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    actionClassifications(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.video)) {
            formData.append('video', args.video);
        }
        if (isDefined(args.video_url)) {
            formData.append('video_url', args.video_url);
        }
        return this.httpClient.post({
            url: '/video/text/action-classifications/',
            headers: {
                'Content-Type': this.params.useFetch ? VIDEO_TEXT_ACTION_CLASSIFICATIONS_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            body: formData,
        });
    }
}
