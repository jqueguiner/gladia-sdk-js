/* Generated file with "scripts/generate-sdk.ts" */
import { AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE, AUDIO_TEXT_SPEAKER_DIARIZATION_CONTENT_TYPE, AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_CONTENT_TYPE, } from '../models';
import { getHttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
export class FromAudioToText {
    constructor(params) {
        this.params = params;
        this.httpClient = getHttpClient(this.params);
    }
    audioTranscription(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.audio)) {
            formData.append('audio', args.audio);
        }
        if (isDefined(args.audio_url)) {
            formData.append('audio_url', args.audio_url);
        }
        formData.append('language', args.language);
        return this.httpClient.post({
            url: '/audio/text/audio-transcription/',
            headers: {
                'Content-Type': this.params.useFetch ? AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            body: formData,
        });
    }
    speakerDiarization(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.audio)) {
            formData.append('audio', args.audio);
        }
        if (isDefined(args.audio_url)) {
            formData.append('audio_url', args.audio_url);
        }
        if (isDefined(args.nb_speakers)) {
            formData.append('nb_speakers', String(args.nb_speakers));
        }
        return this.httpClient.post({
            url: '/audio/text/speaker-diarization/',
            headers: {
                'Content-Type': this.params.useFetch ? AUDIO_TEXT_SPEAKER_DIARIZATION_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            body: formData,
        });
    }
    speakerGenderClassification(args) {
        var _a;
        const formData = new FormData();
        if (isDefined(args.audio)) {
            formData.append('audio', args.audio);
        }
        if (isDefined(args.audio_url)) {
            formData.append('audio_url', args.audio_url);
        }
        return this.httpClient.post({
            url: '/audio/text/speaker-gender-classification/',
            headers: {
                'Content-Type': this.params.useFetch ? AUDIO_TEXT_SPEAKER_GENDER_CLASSIFICATION_CONTENT_TYPE : undefined,
                ...((_a = args.headers) !== null && _a !== void 0 ? _a : {}),
            },
            query: {
                ...(args.model ? { model: args.model } : {}),
            },
            body: formData,
        });
    }
}
