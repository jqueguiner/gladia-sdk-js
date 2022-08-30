/* Generated file with "scripts/generate-sdk.ts" */
import { AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE, AUDIO_TEXT_AUDIO_TRANSCRIPTION_DEFAULT_MODEL, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
export class FromAudioToText {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    audioTranscription(args) {
        var _a, _b;
        const formData = new FormData();
        if (isDefined(args.audio)) {
            formData.append('audio', args.audio);
        }
        if (isDefined(args.audio_url)) {
            formData.append('audio_url', args.audio_url);
        }
        if (isDefined(args.language)) {
            formData.append('language', args.language);
        }
        return this.httpClient.post({
            url: '/audio/text/audio-transcription/',
            headers: {
                'Content-Type': this.params.useFetch ? AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                model: (_b = args.model) !== null && _b !== void 0 ? _b : AUDIO_TEXT_AUDIO_TRANSCRIPTION_DEFAULT_MODEL,
            },
            body: formData,
        });
    }
}
