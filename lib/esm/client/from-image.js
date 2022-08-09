/* Generated file with "scripts/generate-sdk.ts" */
import { FromImageToImage } from './from-image-to-image';
import { FromImageToText } from './from-image-to-text';
export class FromImage {
    constructor(params) {
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
