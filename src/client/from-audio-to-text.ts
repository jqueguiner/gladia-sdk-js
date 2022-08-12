/* Generated file with "scripts/generate-sdk.ts" */

import {
  AudioTextAudioTranscriptionInputs,
} from './input-models'
import {
  AudioTextAudioTranscriptionOutputs,
} from './output-models'
import {
  AUDIO_TEXT_AUDIO_TRANSCRIPTION_DEFAULT_MODEL,
} from '../models'
import { getHttpClient, HttpClient } from '../internal/http-client';
import { GladiaClientParams } from './gladia-client-params';

export class FromAudioToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  audioTranscription(args: AudioTextAudioTranscriptionInputs): Promise<AudioTextAudioTranscriptionOutputs> {
    const formData = new FormData();
    formData.append('audio', args.audio);
    formData.append('audio_url', args.audio_url);
    formData.append('language', args.language);
    return this.httpClient.post({
      url: '/audio/text/audio-transcription/',
      query: {
        model: args.model ?? AUDIO_TEXT_AUDIO_TRANSCRIPTION_DEFAULT_MODEL,
      },
      body: formData,
    });
  }

}
