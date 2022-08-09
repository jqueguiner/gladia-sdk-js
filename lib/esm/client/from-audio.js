/* Generated file with "scripts/generate-sdk.ts" */
import { FromAudioToText } from './from-audio-to-text';
export class FromAudio {
    constructor(params) {
        this.fromAudioToTextInst = new FromAudioToText(params);
    }
    toText() {
        return this.fromAudioToTextInst;
    }
}
