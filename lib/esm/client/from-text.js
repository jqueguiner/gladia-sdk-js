/* Generated file with "scripts/generate-sdk.ts" */
import { FromTextToImage } from './from-text-to-image';
import { FromTextToText } from './from-text-to-text';
export class FromText {
    constructor(params) {
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
