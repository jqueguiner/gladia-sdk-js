/* Generated file with "scripts/generate-sdk.ts" */
import { FromVideoToText } from './from-video-to-text';
export class FromVideo {
    constructor(params) {
        this.fromVideoToTextInst = new FromVideoToText(params);
    }
    toText() {
        return this.fromVideoToTextInst;
    }
}
