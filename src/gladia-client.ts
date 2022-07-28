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
    this.fromAudioInst = new FromAudio(params);
    this.fromImageInst = new FromImage(params);
    this.fromTextInst = new FromText(params);
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
