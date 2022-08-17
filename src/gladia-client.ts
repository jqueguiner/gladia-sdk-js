/* Generated file with "scripts/generate-sdk.ts" */

import { GladiaClientParams } from './client/gladia-client-params';
import { Shortcuts } from './client/shortcuts';
import { FromAudio } from './client/from-audio';
import { FromImage } from './client/from-image';
import { FromText } from './client/from-text';

export class GladiaClient extends Shortcuts {
  private fromAudioInst: FromAudio;
  private fromImageInst: FromImage;
  private fromTextInst: FromText;

  constructor(params: GladiaClientParams) {
    super();
    const validatedParams: GladiaClientParams = {
      ...params,
      useFetch: params.useFetch ?? false,
    }
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
