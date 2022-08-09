/* Generated file with "scripts/generate-sdk.ts" */
import { AUDIO_TEXT_SPEECH_TO_TEXT_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
export class FromAudioToText {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    speech_to_text(args) {
        var _a;
        const formData = new FormData();
        formData.append('audio', args.audio);
        formData.append('audio_url', args.audio_url);
        formData.append('language', args.language);
        return this.httpClient.post({
            url: '/audio/text/speech_to_text/',
            query: { model: (_a = args.model) !== null && _a !== void 0 ? _a : AUDIO_TEXT_SPEECH_TO_TEXT_DEFAULT_MODEL },
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        });
    }
}
