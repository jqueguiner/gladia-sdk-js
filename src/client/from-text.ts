/* Generated file with "scripts/generate-sdk.ts" */

import { FromTextToImage } from './from-text-to-image';
import { FromTextToText } from './from-text-to-text';
import { GladiaClientParams } from './gladia-client-params';

export class FromText {
  private fromTextToImageInst: FromTextToImage;
  private fromTextToTextInst: FromTextToText;

  constructor(params: GladiaClientParams) {
    this.fromTextToImageInst = new FromTextToImage(params);
    this.fromTextToTextInst = new FromTextToText(params);
  }

  toImage() {
    return this.fromTextToImageInst;
  }

  toText() {
    return this.fromTextToTextInst;
  }

}
