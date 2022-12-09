/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClientParams } from './client/gladia-client-params';
import { Shortcuts } from './client/shortcuts';
import { FromAudio } from './client/from-audio';
import { FromImage } from './client/from-image';
import { FromText } from './client/from-text';
import { GladiaClientBase } from './client/gladia-client-base';
import { applyMixins } from './utils/mixin';

export class GladiaClient extends GladiaClientBase {
  private fromAudioInst: FromAudio;
  private fromImageInst: FromImage;
  private fromTextInst: FromText;

  constructor(params: GladiaClientParams) {
    const validatedParams: GladiaClientParams = {
      ...params,
      useFetch: params.useFetch ?? false,
      useXhr: params.useXhr ?? false,
    };
    super(validatedParams);
    this.fromAudioInst = new FromAudio(validatedParams);
    this.fromImageInst = new FromImage(validatedParams);
    this.fromTextInst = new FromText(validatedParams);
  }

  fromAudio() {
    return this.fromAudioInst;
  }

  fromImage() {
    return this.fromImageInst;
  }

  fromText() {
    return this.fromTextInst;
  }
}

// extending this interface and applying mixin here is a multi-inheritance simulation
export interface GladiaClient extends GladiaClientBase, Shortcuts {}
applyMixins(GladiaClient, [Shortcuts]);
