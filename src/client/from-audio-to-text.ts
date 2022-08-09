/* Generated file with "scripts/generate-sdk.ts" */

import {
  AudioTextSpeech_to_textInputs,
} from './input-models'
import {
  AudioTextSpeech_to_textOutputs,
} from './output-models'
import {
  AUDIO_TEXT_SPEECH_TO_TEXT_DEFAULT_MODEL,
} from '../models'
import { getHttpClient, HttpClient } from '../internal/http-client';
import { GladiaClientParams } from './gladia-client-params';

export class FromAudioToText {
  private httpClient: HttpClient;

  constructor(private params: GladiaClientParams) {
    this.httpClient = getHttpClient(this.params);
  }

  speech_to_text(args: AudioTextSpeech_to_textInputs): Promise<AudioTextSpeech_to_textOutputs> {
    const formData = new FormData();
    formData.append('audio', args.audio);
    formData.append('audio_url', args.audio_url);
    formData.append('language', args.language);
    return this.httpClient.post({
      url: '/audio/text/speech_to_text/',
      query: { model: args.model ?? AUDIO_TEXT_SPEECH_TO_TEXT_DEFAULT_MODEL },
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    });
  }

}
