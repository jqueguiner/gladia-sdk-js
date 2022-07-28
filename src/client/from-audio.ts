/* Generated file with "scripts/generate-sdk.ts" */

import { FromAudioToText } from './from-audio-to-text';
import { GladiaClientParams } from './gladia-client-params';

export class FromAudio {
  private fromAudioToTextInst: FromAudioToText;

  constructor(params: GladiaClientParams) {
    this.fromAudioToTextInst = new FromAudioToText(params);
  }

  toText() {
    return this.fromAudioToTextInst;
  }

}
