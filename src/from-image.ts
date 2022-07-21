import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
import { GladiaClientParams } from './gladia-client';

export class FromImage {
  private fromImageToImageInst: FromImageToImage;
  private fromImageToTextInst: FromImageToText;

  constructor(private params: GladiaClientParams) {
    this.fromImageToImageInst = new FromImageToImage(this.params);
    this.fromImageToTextInst = new FromImageToText(this.params);
  }

  toImage() {
    return this.fromImageToImageInst;
  }

  toText() {
    return this.fromImageToTextInst;
  }
}
