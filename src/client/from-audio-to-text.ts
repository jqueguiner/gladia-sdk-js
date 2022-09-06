/* Generated file with "scripts/generate-sdk.ts" */

import {
  AudioTextAudioTranscriptionInputs,
} from './input-models';
import {
  AudioTextAudioTranscriptionOutputs,
} from './output-models';
import {
  AUDIO_TEXT_AUDIO_TRANSCRIPTION_CONTENT_TYPE,
} from '../models';
import { getHttpClient, HttpClient } from '../internal/http-client';
import { isDefined } from '../utils/fp';
import { GladiaClientParams } from './gladia-client-params';

export class FromAudioToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<AudioTextAudioTranscriptionOutputs> {
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
        ...(args.headers ?? {}),
      },
      query: {
        ...(args.model ? {model: args.model} : {}),
      },
      body: formData,
    });
  }

}
