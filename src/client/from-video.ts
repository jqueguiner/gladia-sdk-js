/* Generated file with "scripts/generate-sdk.ts" */

import { FromVideoToText } from './from-video-to-text';
import { GladiaClientParams } from './gladia-client-params';

export class FromVideo {
  private fromVideoToTextInst: FromVideoToText;

  constructor(params: GladiaClientParams) {
    this.fromVideoToTextInst = new FromVideoToText(params);
  }

  toText() {
    return this.fromVideoToTextInst;
  }

}
