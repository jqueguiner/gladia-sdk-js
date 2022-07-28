/* Generated file with "scripts/generate-sdk.ts" */

import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
import { GladiaClientParams } from './gladia-client-params';

export class FromImage {
  private fromImageToImageInst: FromImageToImage;
  private fromImageToTextInst: FromImageToText;

  constructor(params: GladiaClientParams) {
    this.fromImageToImageInst = new FromImageToImage(params);
    this.fromImageToTextInst = new FromImageToText(params);
  }

  toImage() {
    return this.fromImageToImageInst;
  }

  toText() {
    return this.fromImageToTextInst;
  }

}
